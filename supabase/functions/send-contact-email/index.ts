
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resendApiKey = Deno.env.get("RESEND_API_KEY");
const resend = new Resend(resendApiKey);

// Define CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

serve(async (req) => {
  console.log("Request received:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request");
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    console.log("Method not allowed:", req.method);
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    // Log that we're processing a POST request
    console.log("Processing POST request");
    
    // Parse the request body
    const body = await req.text();
    console.log("Request body received:", body);
    
    // Parse the JSON body
    const formData: ContactFormData = JSON.parse(body);
    const { name, company, email, phone, service, message } = formData;

    // Log the request data for debugging
    console.log("Processing contact form submission:", { name, email, company, service });

    // Check if Resend API key is available
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "RESEND_API_KEY is not set" 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Send email notification
    console.log("Sending email via Resend");
    const emailResponse = await resend.emails.send({
      from: "Smart Sales Process <onboarding@resend.dev>",
      to: ["Sales@SmartSalesProcess.com"],
      subject: `New Contact Form Submission from ${name} - ${company}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Interested In:</strong> ${service}</p>
        <h2>Message</h2>
        <p>${message}</p>
        <hr>
        <p><em>This email was automatically sent from the contact form on SmartSalesProcess.com</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
