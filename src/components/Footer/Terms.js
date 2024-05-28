import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { useTheme } from "../../contexts/Theme";

const Terms = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode? "bg-dark text-light":""}>
      <Navbar />
      <div className="container p-5">
        <h3>Terms of Service</h3>
        <p>
          Welcome to RecipeHub! These terms of service ("Terms") govern your
          access to and use of the RecipeHub website and services ("Service").
          By accessing or using the Service, you agree to be bound by these
          Terms.
        </p>
        <ol>
          <li>
            <h5>Use of Service</h5>
            <ul>
              <li>You must be at least 13 years old to use the Service.</li>
              <li>
                You agree to use the Service only for lawful purposes and in
                compliance with these Terms.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account and password and for restricting access to your account.
              </li>
            </ul>
          </li>
          <li>
            <h5>User Content</h5>
            <ul>
              <li>
                You retain ownership of any content you submit to the Service
                ("User Content").
              </li>
              <li>
                By submitting User Content, you grant RecipeHub a worldwide,
                royalty-free, and non-exclusive license to use, reproduce,
                modify, adapt, publish, translate, distribute, and display the
                User Content.
              </li>
            </ul>
          </li>
          <li>
            <h5>Prohibited Conduct</h5>
            <ul>
              <li>
                You agree not to violate any applicable laws or regulations.
              </li>
              <li>You agree not to impersonate any person or entity.</li>
              <li>
                You agree not to interfere with or disrupt the Service or
                servers or networks connected to the Service.
              </li>
              <li>
                You agree not to use the Service for any commercial purpose
                without prior written consent from RecipeHub.
              </li>
            </ul>
          </li>

          <li>
            <h5>Intellectual Property</h5>
            <ul>
              <p>
                The Service and its original content, features, and
                functionality are owned by RecipeHub and are protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property or proprietary rights laws.
              </p>
            </ul>
          </li>
          <li>
            <h5>Disclaimer of Warranties</h5>
            <ul>
              <p>
                The Service is provided on an "as is" and "as available" basis.
                RecipeHub makes no warranties, expressed or implied, regarding
                the accuracy, reliability, or availability of the Service.
              </p>
            </ul>
          </li>
          <li>
            <h5>Limitation of Liability</h5>
            <ul>
              <p>
                In no event shall RecipeHub be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses.
              </p>
            </ul>
          </li>
          <li>
            <h5>Indemnification</h5>
            <ul>
              <p>
                You agree to indemnify and hold harmless RecipeHub, its
                affiliates, and their respective officers, directors, employees,
                and agents from and against any and all claims, liabilities,
                damages, losses, costs, expenses, or fees arising out of your
                use of the Service.
              </p>
            </ul>
          </li>
          <li>
            <h5>Modifications</h5>
            <ul>
              <p>
                RecipeHub reserves the right, at its sole discretion, to modify
                or replace these Conditions at any time. If a revision is
                material, RecipeHub will provide at least 30 days' notice prior
                to any new conditions taking effect.
              </p>
            </ul>
          </li>
          <li>
            <h5>Governing Law</h5>
            <ul>
              <p>
                These Conditions shall be governed and construed in accordance
                with the laws of [Your Country], without regard to its conflict
                of law provisions.
              </p>
            </ul>
          </li>
          <li>
            <h5>Contact Us</h5>
            <ul>
              <p>
                If you have any questions about these Conditions, please contact
                us at [Your Contact Information].
              </p>
            </ul>
          </li>
        </ol>
        By accessing or using the Service, you acknowledge that you have read,
        understood, and agree to be bound by these Terms. If you do not agree to
        these Terms, you may not access or use the Service.
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
