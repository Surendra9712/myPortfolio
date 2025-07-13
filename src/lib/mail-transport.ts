'use server';
import nodemailer from 'nodemailer';
import * as fs from 'fs';
import {join} from 'path';
import * as handlebars from 'handlebars';
import {IContactForm} from "@/src/components/sections/contact-form";

export default async function sendEmail(
    data: IContactForm) {
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT || '465'),
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
        secure: true,
    });
    const templateData = {
        name: data.name,
        subject: data.subject,
        email: data.email,
        message: data.message,
    };
    const templatePath = join('src/templates', 'contact-template.hbs');
    const contactTemplate = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(contactTemplate);
    const mailOptions = {
        from: data.email,
        to: process.env.TO_MAIL,
        subject: data.subject,
        html: compiledTemplate(templateData)
    };
    return await transporter.sendMail(mailOptions);
}