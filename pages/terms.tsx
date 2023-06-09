import styled from "styled-components";
import Nav from "../components/Nav";
import Image from "next/image";
import Footer from "../components/Footer";
import Head from "next/head";

const Container = styled.div`
  width: 1040px;
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
  margin-right: auto;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 54%;
  padding-top: 20px;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 2px;

  @media (max-width: 850px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 850px) {
    font-size: 24px;
  }
`;

const InformationText = styled.span`
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 30px;

  @media (max-width: 850px) {
    font-size: 10px;
    line-height: 18px;
    margin-bottom: 15px;
  }
`;

const SideLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-size: 10px;
  margin-bottom: 10px;

  @media (max-width: 850px) {
    display: none;
  }
`;

const Heading = styled.span`
  font-size: 16px;
  margin-bottom: 20px;
  text-transform: uppercase;

  @media (max-width: 850px) {
    font-size: 14px;
  }
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 40px;

  @media (max-width: 850px) {
    font-size: 10px;
    line-height: 18px;
  }
`;

const TermsPage = () => {
  return (
    <>
      <Head>
        <link href="/favicon.png" rel="icon" />
        <title>QuantumIO | Terms and Conditions</title>
      </Head>
      <Nav isExternal />
      <Container>
        <LeftColumn>
          <Title>Terms and Conditions</Title>
          <Subtitle>SSQ Digital LLP</Subtitle>
          <InformationText>Updated at 2022-01-24</InformationText>
          <SideLink href="#1">General Terms</SideLink>
          <SideLink href="#2">License</SideLink>
          <SideLink href="#3">Definitions and key terms</SideLink>
          <SideLink href="#4">Restrictions</SideLink>
          <SideLink href="#5">Return and Refund Policy</SideLink>
          <SideLink href="#6">Your Suggestions</SideLink>
          <SideLink href="#7">Your Consent</SideLink>
          <SideLink href="#8">Links to Other Websites</SideLink>
          <SideLink href="#9">Cookies</SideLink>
          <SideLink href="#10">Changes To Our Terms & Conditions</SideLink>
          <SideLink href="#11">Modifications to Our website</SideLink>
          <SideLink href="#12">Updates to Our website</SideLink>
          <SideLink href="#13">Third-Party Services</SideLink>
          <SideLink href="#14">Term and Termination</SideLink>
          <SideLink href="#15">Copyright Infringement Notice</SideLink>
          <SideLink href="#16">Indemnification</SideLink>
          <SideLink href="#17">No Warranties</SideLink>
          <SideLink href="#18">Limitation of Liability</SideLink>
          <SideLink href="#19">Severability</SideLink>
          <SideLink href="#20">Waiver</SideLink>
          <SideLink href="#21">Amendments to this Agreement</SideLink>
          <SideLink href="#22">Entire Agreement</SideLink>
          <SideLink href="#23">Updates to Our Terms</SideLink>
          <SideLink href="#24">Intellectual Property</SideLink>
          <SideLink href="#25">Agreement to Arbitrate</SideLink>
          <SideLink href="#26">Notice of Dispute</SideLink>
          <SideLink href="#27">Binding Arbitration</SideLink>
          <SideLink href="#28">Submissions and Privacy</SideLink>
          <SideLink href="#29">Promotions</SideLink>
          <SideLink href="#30">Typographical Errors</SideLink>
          <SideLink href="#31">Miscellaneous</SideLink>
          <SideLink href="#32">Disclaimer</SideLink>
          <SideLink href="#33">Contact Us</SideLink>
        </LeftColumn>
        <RightColumn>
          <Heading id="1">General Terms</Heading>
          <Text>
            By accessing and placing an order with Quantum IO, you confirm that
            you are in agreement with and bound by the terms of service
            contained in the Terms & Conditions outlined below. These terms
            apply to the entire website and any email or other type of
            communication between you and Quantum IO.
            <br />
            <br />
            Under no circumstances shall Quantum IO team be liable for any
            direct, indirect, special, incidental or consequential damages,
            including, but not limited to, loss of data or profit, arising out
            of the use, or the inability to use, the materials on this site,
            even if Quantum IO team or an authorized representative has been
            advised of the possibility of such damages. If your use of materials
            from this site results in the need for servicing, repair or
            correction of equipment or data, you assume any costs thereof.
            <br />
            <br />
            Quantum IO will not be responsible for any outcome that may occur
            during the course of usage of our resources. We reserve the rights
            to change prices and revise the resources usage policy in any
            moment.
          </Text>
          <Heading id="2">License</Heading>
          <Text>
            Quantum IO grants you a revocable, non-exclusive, non-transferable,
            limited license to download, install and use the website strictly in
            accordance with the terms of this Agreement.
            <br />
            <br />
            These Terms & Conditions are a contract between you and Quantum IO
            (referred to in these Terms & Conditions as "Quantum IO", "us", "we"
            or "our"), the provider of the Quantum IO website and the services
            accessible from the Quantum IO website (which are collectively
            referred to in these Terms & Conditions as the "Quantum IO
            Service").
            <br />
            <br />
            You are agreeing to be bound by these Terms & Conditions. If you do
            not agree to these Terms & Conditions, please do not use the Quantum
            IO Service. In these Terms & Conditions, "you" refers both to you as
            an individual and to the entity you represent. If you violate any of
            these Terms & Conditions, we reserve the right to cancel your
            account or block access to your account without notice.
          </Text>
          <Heading id="3">Definitions and key terms</Heading>
          <Text>
            <ul>
              <li>
                Cookie: small amount of data generated by a website and saved by
                your web browser. It is used to identify your browser, provide
                analytics, remember information about you such as your language
                preference or login information.
              </li>
              <li>
                Company: when this policy mentions “Company,” “we,” “us,” or
                “our,” it refers to SSQ Digital LLP, (PALLISER HOUSE SECOND
                FLOOR PALLISER ROAD LONDON UNITED KINGDOM W14 9EB) that is
                responsible for your information under this Terms & Conditions.
              </li>
              <li>
                Country: where Quantum IO or the owners/founders of Quantum IO
                are based, in this case is United Kingdom
              </li>
              <li>
                Device: any internet connected device such as a phone, tablet,
                computer or any other device that can be used to visit Quantum
                IO and use the services.
              </li>
              <li>
                Service: refers to the service provided by Quantum IO as
                described in the relative terms (if available) and on this
                platform.
              </li>
              <li>
                Third-party service: refers to advertisers, contest sponsors,
                promotional and marketing partners, and others who provide our
                content or whose products or services we think may interest you.
              </li>
              <li>
                Website: Quantum IO."’s" site, which can be accessed via this
                URL: http://www.qntmru.io/
              </li>
              <li>
                You: a person or entity that is registered with Quantum IO to
                use the Services.
              </li>
            </ul>
          </Text>
          <Heading id="4">Restrictions</Heading>
          <Text>
            You agree not to, and you will not permit others to:
            <br />
            <br />
            <ul>
              <li>
                License, sell, rent, lease, assign, distribute, transmit, host,
                outsource, disclose or otherwise commercially exploit the
                website or make the platform available to any third party.
              </li>
              <li>
                Modify, make derivative works of, disassemble, decrypt, reverse
                compile or reverse engineer any part of the website.
              </li>
              <li>
                Remove, alter or obscure any proprietary notice (including any
                notice of copyright or trademark) of Quantum IO or its
                affiliates, partners, suppliers or the licensors of the website.
                <br />
                <br />
              </li>
            </ul>
          </Text>
          <Heading id="5">Return and Refund Policy</Heading>
          <Text>
            Thanks for shopping at Quantum IO. We appreciate the fact that you
            like to buy the stuff we build. We also want to make sure you have a
            rewarding experience while you’re exploring, evaluating, and
            purchasing our products.
            <br />
            <br />
            As with any shopping experience, there are terms and conditions that
            apply to transactions at Quantum IO. We’ll be as brief as our
            attorneys will allow. The main thing to remember is that by placing
            an order or making a purchase at Quantum IO, you agree to the terms
            along with Quantum IO."’s" Privacy Policy.
            <br />
            <br />
            If, for any reason, You are not completely satisfied with any good
            or service that we provide, don't hesitate to contact us and we will
            discuss any of the issues you are going through with our product.
          </Text>
          <Heading id="6">Your Suggestions</Heading>
          <Text>
            Any feedback, comments, ideas, improvements or suggestions
            (collectively, "Suggestions") provided by you to Quantum IO with
            respect to the website shall remain the sole and exclusive property
            of Quantum IO.
            <br />
            <br />
            Quantum IO shall be free to use, copy, modify, publish, or
            redistribute the Suggestions for any purpose and in any way without
            any credit or any compensation to you.
          </Text>
          <Heading id="7">Your Consent</Heading>
          <Text>
            We've updated our Terms & Conditions to provide you with complete
            transparency into what is being set when you visit our site and how
            it's being used. By using our website, registering an account, or
            making a purchase, you hereby consent to our Terms & Conditions.
          </Text>
          <Heading id="8">Links to Other Websites</Heading>
          <Text>
            This Terms & Conditions applies only to the Services. The Services
            may contain links to other websites not operated or controlled by
            Quantum IO. We are not responsible for the content, accuracy or
            opinions expressed in such websites, and such websites are not
            investigated, monitored or checked for accuracy or completeness by
            us. Please remember that when you use a link to go from the Services
            to another website, our Terms & Conditions are no longer in effect.
            Your browsing and interaction on any other website, including those
            that have a link on our platform, is subject to that website’s own
            rules and policies. Such third parties may use their own cookies or
            other methods to collect information about you.
          </Text>
          <Heading id="9">Cookies</Heading>
          <Text>
            Quantum IO uses "Cookies" to identify the areas of our website that
            you have visited. A Cookie is a small piece of data stored on your
            computer or mobile device by your web browser. We use Cookies to
            enhance the performance and functionality of our website but are
            non-essential to their use. However, without these cookies, certain
            functionality like videos may become unavailable or you would be
            required to enter your login details every time you visit the
            website as we would not be able to remember that you had logged in
            previously. Most web browsers can be set to disable the use of
            Cookies. However, if you disable Cookies, you may not be able to
            access functionality on our website correctly or at all. We never
            place Personally Identifiable Information in Cookies.
          </Text>
          <Heading id="10">Changes To Our Terms & Conditions</Heading>
          <Text>
            You acknowledge and agree that Quantum IO may stop (permanently or
            temporarily) providing the Service (or any features within the
            Service) to you or to users generally at Quantum IO’s sole
            discretion, without prior notice to you. You may stop using the
            Service at any time. You do not need to specifically inform Quantum
            IO when you stop using the Service. You acknowledge and agree that
            if Quantum IO disables access to your account, you may be prevented
            from accessing the Service, your account details or any files or
            other materials which is contained in your account.
            <br />
            <br />
            If we decide to change our Terms & Conditions, we will post those
            changes on this page, and/or update the Terms & Conditions
            modification date below.
          </Text>
          <Heading id="11">Modifications to Our website</Heading>
          <Text>
            Quantum IO reserves the right to modify, suspend or discontinue,
            temporarily or permanently, the website or any service to which it
            connects, with or without notice and without liability to you.
          </Text>
          <Heading id="12">Updates to Our website</Heading>
          <Text>
            Quantum IO may from time to time provide enhancements or
            improvements to the features/ functionality of the website, which
            may include patches, bug fixes, updates, upgrades and other
            modifications ("Updates").
            <br />
            <br />
            Updates may modify or delete certain features and/or functionalities
            of the website. You agree that Quantum IO has no obligation to (i)
            provide any Updates, or (ii) continue to provide or enable any
            particular features and/or functionalities of the website to you.
            <br />
            <br />
            You further agree that all Updates will be (i) deemed to constitute
            an integral part of the website, and (ii) subject to the terms and
            conditions of this Agreement.
          </Text>
          <Heading id="13">Third-Party Services</Heading>
          <Text>
            We may display, include or make available third-party content
            (including data, information, applications and other products
            services) or provide links to third-party websites or services
            ("Third- Party Services").
            <br />
            <br />
            You acknowledge and agree that Quantum IO shall not be responsible
            for any Third-Party Services, including their accuracy,
            completeness, timeliness, validity, copyright compliance, legality,
            decency, quality or any other aspect thereof. Quantum IO does not
            assume and shall not have any liability or responsibility to you or
            any other person or entity for any Third-Party Services.
            <br />
            <br />
            Third-Party Services and links thereto are provided solely as a
            convenience to you and you access and use them entirely at your own
            risk and subject to such third parties' terms and conditions.
          </Text>
          <Heading id="14">Term and Termination</Heading>
          <Text>
            This Agreement shall remain in effect until terminated by you or
            Quantum IO.
            <br />
            <br />
            Quantum IO may, in its sole discretion, at any time and for any or
            no reason, suspend or terminate this Agreement with or without prior
            notice.
            <br />
            <br />
            This Agreement will terminate immediately, without prior notice from
            Quantum IO, in the event that you fail to comply with any provision
            of this Agreement. You may also terminate this Agreement by deleting
            the website and all copies thereof from your computer.
            <br />
            <br />
            Upon termination of this Agreement, you shall cease all use of the
            website and delete all copies of the website from your computer.
            Termination of this Agreement will not limit any of Quantum IO's
            rights or remedies at law or in equity in case of breach by you
            (during the term of this Agreement) of any of your obligations under
            the present Agreement.
          </Text>
          <Heading id="15">Copyright Infringement Notice</Heading>
          <Text>
            If you are a copyright owner or such owner’s agent and believe any
            material on our website constitutes an infringement on your
            copyright, please contact us setting forth the following
            information: (a) a physical or electronic signature of the copyright
            owner or a person authorized to act on his behalf; (b)
            identification of the material that is claimed to be infringing; (c)
            your contact information, including your address, telephone number,
            and an email; (d) a statement by you that you have a good faith
            belief that use of the material is not authorized by the copyright
            owners; and (e) the a statement that the information in the
            notification is accurate, and, under penalty of perjury you are
            authorized to act on behalf of the owner.
          </Text>
          <Heading id="16">Indemnification</Heading>
          <Text>
            You agree to indemnify and hold Quantum IO and its parents,
            subsidiaries, affiliates, officers, employees, agents, partners and
            licensors (if any) harmless from any claim or demand, including
            reasonable attorneys' fees, due to or arising out of your: (a) use
            of the website; (b) violation of this Agreement or any law or
            regulation; or (c) violation of any right of a third party.
          </Text>
          <Heading id="17">No Warranties</Heading>
          <Text>
            The website is provided to you "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, Quantum IO, on its own behalf
            and on behalf of its affiliates and its and their respective
            licensors and service providers, expressly disclaims all warranties,
            whether express, implied, statutory or otherwise, with respect to
            the website, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, Quantum IO provides no warranty or undertaking, and makes
            no representation of any kind that the website will meet your
            requirements, achieve any intended results, be compatible or work
            with any other software, , systems or services, operate without
            interruption, meet any performance or reliability standards or be
            error free or that any errors or defects can or will be corrected.
            <br />
            <br />
            Without limiting the foregoing, neither Quantum IO nor any Quantum
            IO's provider makes any representation or warranty of any kind,
            express or implied: (i) as to the operation or availability of the
            website, or the information, content, and materials or products
            included thereon; (ii) that the website will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the website; or (iv)
            that the website, its servers, the content, or e-mails sent from or
            on behalf of Quantum IO are free of viruses, scripts, trojan horses,
            worms, malware, timebombs or other harmful components.
            <br />
            <br />
            Some jurisdictions do not allow the exclusion of or limitations on
            implied warranties or the limitations on the applicable statutory
            rights of a consumer, so some or all of the above exclusions and
            limitations may not apply to you.
          </Text>
          <Heading id="18">Limitation of Liability</Heading>
          <Text>
            Notwithstanding any damages that you might incur, the entire
            liability of Quantum IO and any of its suppliers under any provision
            of this Agreement and your exclusive remedy for all of the foregoing
            shall be limited to the amount actually paid by you for the website.
            <br />
            <br />
            To the maximum extent permitted by applicable law, in no event shall
            Quantum IO or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, for loss of data or other
            information, for business interruption, for personal injury, for
            loss of privacy arising out of or in any way related to the use of
            or inability to use the website, third-party software and/or
            third-party hardware used with the website, or otherwise in
            connection with any provision of this Agreement), even if Quantum IO
            or any supplier has been advised of the possibility of such damages
            and even if the remedy fails of its essential purpose.
            <br />
            <br />
            Some states/jurisdictions do not allow the exclusion or limitation
            of incidental or consequential damages, so the above limitation or
            exclusion may not apply to you.
          </Text>
          <Heading id="19">Severability</Heading>
          <Text>
            If any provision of this Agreement is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
            <br />
            <br />
            This Agreement, together with the Privacy Policy and any other legal
            notices published by Quantum IO on the Services, shall constitute
            the entire agreement between you and Quantum IO concerning the
            Services. If any provision of this Agreement is deemed invalid by a
            court of competent jurisdiction, the invalidity of such provision
            shall not affect the validity of the remaining provisions of this
            Agreement, which shall remain in full force and effect. No waiver of
            any term of this Agreement shall be deemed a further or continuing
            waiver of such term or any other term, and Quantum IO."’s" failure
            to assert any right or provision under this Agreement shall not
            constitute a waiver of such right or provision. YOU AND Quantum IO
            AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE
            SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION
            ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.
          </Text>
          <Heading id="20">Waiver</Heading>
          <Text>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under this Agreement shall not
            effect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall be the waiver of a
            breach constitute waiver of any subsequent breach.
            <br />
            <br />
            No failure to exercise, and no delay in exercising, on the part of
            either party, any right or any power under this Agreement shall
            operate as a waiver of that right or power. Nor shall any single or
            partial exercise of any right or power under this Agreement preclude
            further exercise of that or any other right granted herein. In the
            event of a conflict between this Agreement and any applicable
            purchase or other terms, the terms of this Agreement shall govern.
          </Text>
          <Heading id="21">Amendments to this Agreement</Heading>
          <Text>
            Quantum IO reserves the right, at its sole discretion, to modify or
            replace this Agreement at any time. If a revision is material we
            will provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion. By continuing to access or use our website after
            any revisions become effective, you agree to be bound by the revised
            terms. If you do not agree to the new terms, you are no longer
            authorized to use Quantum IO.
          </Text>
          <Heading id="22">Entire Agreement</Heading>
          <Text>
            The Agreement constitutes the entire agreement between you and
            Quantum IO regarding your use of the website and supersedes all
            prior and contemporaneous written or oral agreements between you and
            Quantum IO. You may be subject to additional terms and conditions
            that apply when you use or purchase other Quantum IO's services,
            which Quantum IO will provide to you at the time of such use or
            purchase.
          </Text>
          <Heading id="23">Updates to Our Terms</Heading>
          <Text>
            We may change our Service and policies, and we may need to make
            changes to these Terms so that they accurately reflect our Service
            and policies. Unless otherwise required by law, we will notify you
            (for example, through our Service) before we make changes to these
            Terms and give you an opportunity to review them before they go into
            effect. Then, if you continue to use the Service, you will be bound
            by the updated Terms. If you do not want to agree to these or any
            updated Terms, you can delete your account.
          </Text>
          <Heading id="24">Intellectual Property</Heading>
          <Text>
            The website and its entire contents, features and functionality
            (including but not limited to all information, software, text,
            displays, images, video and audio, and the design, selection and
            arrangement thereof), are owned by Quantum IO, its licensors or
            other providers of such material and are protected by United Kingdom
            and international copyright, trademark, patent, trade secret and
            other intellectual property or proprietary rights laws. The material
            may not be copied, modified, reproduced, downloaded or distributed
            in any way, in whole or in part, without the express prior written
            permission of Quantum IO, unless and except as is expressly provided
            in these Terms & Conditions. Any unauthorized use of the material is
            prohibited.
          </Text>
          <Heading id="25">Agreement to Arbitrate</Heading>
          <Text>
            This section applies to any dispute EXCEPT IT DOESN’T INCLUDE A
            DISPUTE RELATING TO CLAIMS FOR INJUNCTIVE OR EQUITABLE RELIEF
            REGARDING THE ENFORCEMENT OR VALIDITY OF YOUR OR Quantum IO."’s"
            INTELLECTUAL PROPERTY RIGHTS. The term “dispute” means any dispute,
            action, or other controversy between you and Quantum IO concerning
            the Services or this agreement, whether in contract, warranty, tort,
            statute, regulation, ordinance, or any other legal or equitable
            basis. “Dispute” will be given the broadest possible meaning
            allowable under law.
          </Text>
          <Heading id="26">Notice of Dispute</Heading>
          <Text>
            In the event of a dispute, you or Quantum IO must give the other a
            Notice of Dispute, which is a written statement that sets forth the
            name, address, and contact information of the party giving it, the
            facts giving rise to the dispute, and the relief requested. You must
            send any Notice of Dispute via email to: ohodkompsonutzer@gmail.com.
            Quantum IO will send any Notice of Dispute to you by mail to your
            address if we have it, or otherwise to your email address. You and
            Quantum IO will attempt to resolve any dispute through informal
            negotiation within sixty (60) days from the date the Notice of
            Dispute is sent. After sixty (60) days, you or Quantum IO may
            commence arbitration.
          </Text>
          <Heading id="27">Binding Arbitration</Heading>
          <Text>
            If you and Quantum IO don’t resolve any dispute by informal
            negotiation, any other effort to resolve the dispute will be
            conducted exclusively by binding arbitration as described in this
            section. You are giving up the right to litigate (or participate in
            as a party or class member) all disputes in court before a judge or
            jury. The dispute shall be settled by binding arbitration in
            accordance with the commercial arbitration rules of the American
            Arbitration Association. Either party may seek any interim or
            preliminary injunctive relief from any court of competent
            jurisdiction, as necessary to protect the party’s rights or property
            pending the completion of arbitration. Any and all legal,
            accounting, and other costs, fees, and expenses incurred by the
            prevailing party shall be borne by the non-prevailing party.
          </Text>
          <Heading id="28">Submissions and Privacy</Heading>
          <Text>
            In the event that you submit or post any ideas, creative
            suggestions, designs, photographs, information, advertisements, data
            or proposals, including ideas for new or improved products,
            services, features, technologies or promotions, you expressly agree
            that such submissions will automatically be treated as
            non-confidential and non-proprietary and will become the sole
            property of Quantum IO without any compensation or credit to you
            whatsoever. Quantum IO and its affiliates shall have no obligations
            with respect to such submissions or posts and may use the ideas
            contained in such submissions or posts for any purposes in any
            medium in perpetuity, including, but not limited to, developing,
            manufacturing, and marketing products and services using such ideas.
          </Text>
          <Heading id="29">Promotions</Heading>
          <Text>
            Quantum IO may, from time to time, include contests, promotions,
            sweepstakes, or other activities (“Promotions”) that require you to
            submit material or information concerning yourself. Please note that
            all Promotions may be governed by separate rules that may contain
            certain eligibility requirements, such as restrictions as to age and
            geographic location. You are responsible to read all Promotions
            rules to determine whether or not you are eligible to participate.
            If you enter any Promotion, you agree to abide by and to comply with
            all Promotions Rules.
            <br />
            <br />
            Additional terms and conditions may apply to purchases of goods or
            services on or through the Services, which terms and conditions are
            made a part of this Agreement by this reference.
          </Text>
          <Heading id="30">Typographical Errors</Heading>
          <Text>
            In the event a product and/or service is listed at an incorrect
            price or with incorrect information due to typographical error, we
            shall have the right to refuse or cancel any orders placed for the
            product and/or service listed at the incorrect price. We shall have
            the right to refuse or cancel any such order whether or not the
            order has been confirmed and your credit card charged. If your
            credit card has already been charged for the purchase and your order
            is canceled, we shall immediately issue a credit to your credit card
            account or other payment account in the amount of the charge.
          </Text>
          <Heading id="31">Miscellaneous</Heading>
          <Text>
            If for any reason a court of competent jurisdiction finds any
            provision or portion of these Terms & Conditions to be
            unenforceable, the remainder of these Terms & Conditions will
            continue in full force and effect. Any waiver of any provision of
            these Terms & Conditions will be effective only if in writing and
            signed by an authorized representative of Quantum IO. Quantum IO
            will be entitled to injunctive or other equitable relief (without
            the obligations of posting any bond or surety) in the event of any
            breach or anticipatory breach by you. Quantum IO operates and
            controls the Quantum IO Service from its offices in United Kingdom.
            The Service is not intended for distribution to or use by any person
            or entity in any jurisdiction or country where such distribution or
            use would be contrary to law or regulation. Accordingly, those
            persons who choose to access the Quantum IO Service from other
            locations do so on their own initiative and are solely responsible
            for compliance with local laws, if and to the extent local laws are
            applicable. These Terms & Conditions (which include and incorporate
            the Quantum IO Privacy Policy) contains the entire understanding,
            and supersedes all prior understandings, between you and Quantum IO
            concerning its subject matter, and cannot be changed or modified by
            you. The section headings used in this Agreement are for convenience
            only and will not be given any legal import.
          </Text>
          <Heading id="32">Disclaimer</Heading>
          <Text>
            Quantum IO is not responsible for any content, code or any other
            imprecision.
            <br />
            <br />
            Quantum IO does not provide warranties or guarantees.
            <br />
            <br />
            In no event shall Quantum IO be liable for any special, direct,
            indirect, consequential, or incidental damages or any damages
            whatsoever, whether in an action of contract, negligence or other
            tort, arising out of or in connection with the use of the Service or
            the contents of the Service. Quantum IO reserves the right to make
            additions, deletions, or modifications to the contents on the
            Service at any time without prior notice.
            <br />
            <br />
            The Quantum IO Service and its contents are provided "as is" and "as
            available" without any warranty or representations of any kind,
            whether express or implied. Quantum IO is a distributor and not a
            publisher of the content supplied by third parties; as such, Quantum
            IO exercises no editorial control over such content and makes no
            warranty or representation as to the accuracy, reliability or
            currency of any information, content, service or merchandise
            provided through or accessible via the Quantum IO Service. Without
            limiting the foregoing, Quantum IO specifically disclaims all
            warranties and representations in any content transmitted on or in
            connection with the Quantum IO Service or on sites that may appear
            as links on the Quantum IO Service, or in the products provided as a
            part of, or otherwise in connection with, the Quantum IO Service,
            including without limitation any warranties of merchantability,
            fitness for a particular purpose or non-infringement of third party
            rights. No oral advice or written information given by Quantum IO or
            any of its affiliates, employees, officers, directors, agents, or
            the like will create a warranty. Price and availability information
            is subject to change without notice. Without limiting the foregoing,
            Quantum IO does not warrant that the Quantum IO Service will be
            uninterrupted, uncorrupted, timely, or error-free.
          </Text>
          <Heading id="33">Contact Us</Heading>
          <Text>
            Don't hesitate to contact us if you have any questions.
            <ul>
              <li>Via Email: ohodkompsonutzer@gmail.com</li>
            </ul>
          </Text>
        </RightColumn>
      </Container>
      <Footer isExternal />
    </>
  );
};

export default TermsPage;
