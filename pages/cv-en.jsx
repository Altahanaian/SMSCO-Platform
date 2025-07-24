import Head from "next/head";

export default function CvEn() {
  return (
    <div dir="ltr">
      <Head>
        <title>Resume - SMSCO</title>
        <meta name="description" content="An example resume in English for the SMSCO platform." />
      </Head>

      <div className="cv-container" style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', background: '#fff', borderRadius: '8px' }}>
        <div className="cv-header" style={{ marginBottom: '2rem' }}>
          <h2>John Doe</h2>
          <p>Email: john@example.com | Phone: +966 500000000</p>
        </div>

        <div className="cv-section" style={{ marginBottom: '1.5rem' }}>
          <h5>Summary</h5>
          <p>Experienced marketing professional with a passion for building brand awareness and driving growth.</p>
        </div>

        <div className="cv-section" style={{ marginBottom: '1.5rem' }}>
          <h5>Work Experience</h5>
          <ul>
            <li><strong>Marketing Manager</strong> - ABC Company (2020–Present)</li>
            <li><strong>Brand Specialist</strong> - XYZ Agency (2017–2020)</li>
          </ul>
        </div>

        <div className="cv-section" style={{ marginBottom: '1.5rem' }}>
          <h5>Education</h5>
          <ul>
            <li>Bachelor's in Business Administration - University of Riyadh</li>
          </ul>
        </div>

        <div className="cv-section">
          <h5>Skills</h5>
          <p>SEO, Content Marketing, Team Leadership, Communication</p>
        </div>
      </div>
    </div>
  );
}
