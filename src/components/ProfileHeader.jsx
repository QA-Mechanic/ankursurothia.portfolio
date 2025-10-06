import './ProfileHeader.css';
import profileImg from '../assets/profile.jpg';

export default function ProfileHeader() {
  return (
    <header className="profile-header">
      <img src={profileImg} alt="Ankur Surothia" className="profile-img" />
      <div>
        <h1>Ankur Surothia</h1>
        <p className="profile-title">Software Development Engineer in Test | ISTQB Certified</p>
        <p className="profile-bio">
         Software Development Engineer in Test with 12+ years of experience in Automation quality assurance and software testing, including 7 years in Banking, Consulting, Financial Services and Fintech domains.  Proven expertise in test automation, scripting, test strategy, and performance improvement across UI, API, and back-end systems. Demonstrated leadership and management in Agile environments, with advanced analytical and collaboration skills. 
        </p>
        <div className="profile-skills">
          <strong>Skills:</strong> Java, Python, JavaScript, Selenium, RestAssured, Cypress, Playwright, GitHub Actions, Docker
        </div>
      </div>
    </header>
  );
}
