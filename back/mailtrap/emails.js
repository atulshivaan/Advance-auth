
import { mailtrapClient, sender } from "./mailtrap.config.js";
import {
	
    PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail=async(email,verificationToken)=>{
    const recipient = [{email}]
    try {
        const response =await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Verifiu you email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"
        })
        console.log("Email send succesfully",response);
        
    } catch (error) {
        console.error(`Error sending verification `,error);

        throw new Error(`Error sending verification email :${error}`)
        
    }
}


/*---------------------Welcome Email--------------- */

export const sendWelcomeEmail=async(email,name)=>
{
    const recipient=[{email}];
    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            template_uuid:"111db748-7a7d-47d7-acc4-59df9d295199",
            template_variables:{
                company_info_name:"Adcance Auth",
                name:"Shivaan"
            },
        });
        console.log("Welcome email sent succeefully",response);
        
    } catch (error) {
        console.error(`Error sending welcoming email`,error);

        throw new Error(`Error sending Verification email:${error}`)
        
    }
}


/*---------------- sendPasswordResetEmail-------------*/

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];
  
    try {
      console.log("Preparing to send password reset email...");
  
      const response = await mailtrapClient.send({
        from: sender, // Ensure 'sender' is correctly defined
        to: recipient,
        subject: "Reset Your Password",
        html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
        category: "Password Reset",
      });
  
      console.log("Password reset email sent successfully:", response);
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
  
      throw new Error(`Error sending password reset email: ${error.message}`);
    }
  };


/*-----------sendResetSuccessEmail-------------------- */
export const sendResetSuccessEmail = async(email)=>{
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Password Reset Succesfully",
            html:PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset"
        })
        
    } catch (error) {
        console.error(`Error sending password reset succes email`,error);

        throw new Error(`Error sending password reset success email: ${error}`)
        
    }
}
