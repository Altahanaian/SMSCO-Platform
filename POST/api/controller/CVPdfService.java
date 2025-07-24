package com.smsco.service;

import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.Map;

@Service
public class CVPdfService {

    public byte[] generateCV(Map<String, String> params) throws Exception {
        Document document = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        PdfWriter.getInstance(document, out);
        document.open();

        Font header = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 18);
        Font normal = FontFactory.getFont(FontFactory.HELVETICA, 12);

        document.add(new Paragraph(params.getOrDefault("fullName", "Name"), header));
        document.add(new Paragraph("Email: " + params.getOrDefault("email", ""), normal));
        document.add(new Paragraph("Phone: " + params.getOrDefault("phone", ""), normal));
        document.add(new Paragraph("Summary: " + params.getOrDefault("summary", ""), normal));
        document.add(new Paragraph("Experience: " + params.getOrDefault("experience", ""), normal));
        document.add(new Paragraph("Education: " + params.getOrDefault("education", ""), normal));
        document.add(new Paragraph("Skills: " + params.getOrDefault("skills", ""), normal));

        document.close();
        return out.toByteArray();
    }
}