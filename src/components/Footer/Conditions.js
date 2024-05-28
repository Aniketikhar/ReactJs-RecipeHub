import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { useTheme } from "../../contexts/Theme";

const Conditions = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode? "bg-dark text-light":""} >
      <Navbar />
      <div className="container p-5">
        <h3>Conditions of Use</h3>
        <ol>
          <li>
            <h5>Acceptance of Terms:</h5>
            <p>
              By accessing or using RecipeHub ("the Service"), you agree to be
              bound by these conditions of use ("Conditions"). If you do not
              agree to these Conditions, you may not access or use the Service.
            </p>
          </li>
          <li>
            <h5>Use of Service:</h5>
            <p>
              You agree to use the Service only for lawful purposes and in
              compliance with these Conditions. You are solely responsible for
              your use of the Service and any consequences thereof.
            </p>
          </li>
          <li>
            <h5>Account:</h5>
            <p>
              Some features of the Service may require you to create an account.
              You agree to provide accurate and complete information when
              creating your account and to keep your account information up to
              date.
            </p>
          </li>
          <li>
            <h5>User Content:</h5>
            <p>
              You are solely responsible for any content you submit to the
              Service ("User Content"). By submitting User Content, you grant
              RecipeHub a worldwide, royalty-free, and non-exclusive license to
              use, reproduce, modify, adapt, publish, translate, distribute, and
              display the User Content.
            </p>
          </li>
          <li>
            <h5>Prohibited Conduct:</h5>
            <p>
              You agree not to: Violate any applicable laws or regulations.
              Impersonate any person or entity. Interfere with or disrupt the
              Service or servers or networks connected to the Service. Use the
              Service for any commercial purpose without prior written consent
              from RecipeHub.
            </p>
          </li>
          <li>
            <h5>Intellectual Property:</h5>
            <p>
              The Service and its original content, features, and functionality
              are owned by RecipeHub and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property or proprietary rights laws.
            </p>
          </li>
          <li>
            <h5>Disclaimer of Warranties:</h5>
            <p>
              The Service is provided on an "as is" and "as available" basis.
              RecipeHub makes no warranties, expressed or implied, regarding the
              accuracy, reliability, or availability of the Service.
            </p>
          </li>
          <li>
            <h5>Limitation of Liability:</h5>
            <p>
              In no event shall RecipeHub be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses.
            </p>
          </li>
          <li>
            <h5>Indemnification:</h5>
            <p>
              You agree to indemnify and hold harmless RecipeHub, its
              affiliates, and their respective officers, directors, employees,
              and agents from and against any and all claims, liabilities,
              damages, losses, costs, expenses, or fees arising out of your use
              of the Service.
            </p>
          </li>
          <li>
            <h5>Modifications:</h5>
            <p>
              RecipeHub reserves the right, at its sole discretion, to modify or
              replace these Conditions at any time. If a revision is material,
              RecipeHub will provide at least 30 days' notice prior to any new
              conditions taking effect.
            </p>
          </li>
          <li>
            <h5>Governing Law:</h5>
            <p>
              These Conditions shall be governed and construed in accordance
              with the laws of [Your Country], without regard to its conflict of
              law provisions.
            </p>
          </li>
          <li>
            <h5>Contact Us:</h5>
            <p>
              If you have any questions about these Conditions, please contact
              us at [Your Contact Information].
            </p>
          </li>
        </ol>
        <p>
          By accessing or using the Service, you acknowledge that you have read,
          understood, and agree to be bound by these Conditions. If you do not
          agree to these Conditions, you may not access or use the Service.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Conditions;
