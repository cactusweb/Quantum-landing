import navLogo from "../assets/nav-logo.svg";
import styled from "styled-components";
import Image from "next/image";

const Logo = styled.a`
  margin-right: auto;

  @media (max-width: 1000px) {
    transform: scale(0.87);
    transform-origin: left;
  }
`;

const NavButtonSecondary = styled.a`
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(20px);
  border: 1px solid #55f7ff;
  font-weight: 500;
  color: white;
  height: 40px;
  padding: 0 23px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-bottom: 1px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  column-gap: 1em;
  padding: 2em;
  @media (max-width: 900px) {
    padding: 1em;
  }
`;
import styles from "./styles.module.css";
const UserAgreementPage = () => {
  return (
    <>
      <Nav>
        <Logo href="/">
          <Image src={navLogo} width={163} height={24} alt="Logo" />
        </Logo>

        <NavButtonSecondary href="https://dash.qntmru.io/">
          Dashboard
        </NavButtonSecondary>
      </Nav>

      <div className={styles.agreement}>
        <h1>User agreement</h1>
        <p className={styles.important}>
          This Agreement defines the terms of use by the site visitor
          (hereinafter referred to as the User) of materials and services of the
          site{" "}
          <a href="https://dash.qntmru.io" className={styles.pointer}>
            www.dash.qntmru.io
          </a>{" "}
          (hereinafter referred to as the Site), and also regulates the
          relationship between individual entrepreneurs with the main state
          registration number <a>321774600340291</a> (hereinafter{" "}
          <a>Quantum-IO or Administration</a>) and a site visitor. The{" "}
          <a href="https://dash.qntmru.io" className={styles.pointer}>
            www.dash.qntmru.io
          </a>{" "}
          website is not a mass media
        </p>

        <div className={styles.content}>
          <div className={styles.infoBlock}>
            <h2>1. General conditions</h2>
            <div className={styles.info}>
              <p>
                1.1. The use of materials and services of the Site is governed
                by the norms of the current legislation of the Russian
                Federation
              </p>
              <p>
                1.2. This Agreement is a public offer. By accessing the
                materials of the Site, the User is considered to have acceded to
                this Agreement.
              </p>
              <p>
                1.3. This Agreement enters into force with any use of this site.
                The agreement ceases to be valid when a new version of it
                appears. The administration reserves the right to unilaterally
                change this agreement at its discretion. The administration does
                not notify users about the change in the Agreement
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>2. User’s rights and obligations</h2>
            <div className={styles.info}>
              <p>
                2.1. The user agrees not to take actions that may be considered
                as violating Russian law or international law, including in the
                field of intellectual property, copyright and / or related
                rights, as well as any actions that lead or may lead to a
                violation normal operation of the Site and Site services
              </p>
              <p>
                2.2. Using the materials of the Site without the consent of the
                Administration is not allowed (Article 1270 of the Civil Code of
                the Russian Federation).
              </p>
              <p>
                2.3. When citing materials from the Site, including copyrighted
                works, a link to the Site is required (subparagraph 1 of
                paragraph 1 of Article 1274 of the Civil Code of the Russian
                Federation).
              </p>
              <p>
                2.4. The user is warned that the Site Administration is not
                responsible for visiting and using external resources, links to
                which may be contained on the site
              </p>
              <p>
                2.5. The User agrees that the Site Administration is not
                responsible and has no direct or indirect obligations to the
                User in connection with any possible or incurred losses or
                losses associated with any content of the Site, copyright
                registration and information about such registration, goods or
                services, available on or obtained through external sites or
                resources or other contacts of the User, which he entered using
                the information posted on the Site or links to external
                resources.
              </p>
              <p>
                2.6. The user accepts the provision that all materials and
                services of the Site or any part of them may be accompanied by
                advertising. The user agrees that the Site Administration does
                not bear any responsibility and does not have any obligations in
                connection with such advertising.
              </p>
              <p>
                2.7. The user agrees that he has the right to only search for
                information on the site and use it for personal non-commercial
                purposes.
              </p>
              <p>
                2.8. If the user violates the rules from the #rules channel in
                the Discord server, the server administration reserves the right
                to delete the user key and restrict user access to the server
                without a refund,
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>3. Rights and obligations of the Administration</h2>
            <div className={styles.info}>
              <p>
                3.1. The Site Administration has the right to unilaterally
                change the terms of this Agreement at any time. Such changes
                take effect 3 (three) days from the date of posting the new
                version of the Agreement on the site.
              </p>
              <p>
                3.2. The Site Administration has the right to create, change and
                delete information on the Site, as well as restrict access to
                information.
              </p>
              <p>
                3.3. The Administration undertakes to maintain the site's
                functionality, except in cases where it is impossible for
                reasons beyond the control of the Administration.
              </p>
              <p>
                3.4. The administration undertakes to carry out comprehensive
                protection of the user account.
              </p>
              <p>
                3.5. The Administration undertakes to provide all available
                information about the User to the authorized state authorities
                in cases established by law
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>4. Responsibilities of the parties</h2>
            <div className={styles.info}>
              <p>
                4.1. The administration does not bear any responsibility for the
                services provided by third parties.
              </p>
              <p>
                4.2. In the event of a force majeure situation (military action,
                state of emergency, natural disaster, etc.), the Administration
                does not guarantee the safety of the information posted by the
                User, as well as the uninterrupted operation of the information
                resource.{" "}
              </p>
              <p>
                {" "}
                4.3. The administration accepts the User's payment data and
                redirects them to Tinkoff. Tinkoff (Tinkoff Bank JSC) is
                responsible for the processing and safety of the User's personal
                banking data.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>5. The process of purchasing goods on the site</h2>
            <div className={styles.info}>
              <p>
                5.1. The site provides a product - private access to the Discord
                server. This access is provided to the User who paid for the
                monthly subscription.
              </p>
              <p>
                5.2. You can buy access to the private Discord server on the{" "}
                <a href="https://dash.qntmru.io" className={styles.pointer}>
                  www.dash.qntmru.io
                </a>{" "}
                website using the payment method - bank card. When the user
                selects a payment method, the widget will inform that the
                payment method will be linked to the store. Upon successful
                payment, the card or wallet details will be automatically saved
                in Tinkoff and on the Website
              </p>
              <p>
                5.3. To make a purchase, you must click on the "Buy" button, as
                a result of which a window will appear in which you will need to
                enter a password. The password is provided by the administration
              </p>
              <p>
                5.4. When you make a purchase, a dashboard will open in your
                browser with a unique key already associated. By clicking on the
                "Discord server" button, you will find yourself in a closed
                server.
              </p>
              <p>
                5.5. Further (once a month) payment is made automatically. Money
                is debited from the card specified in the personal data every 30
                (thirty), the amount debited is 15 (fifteen) or 25 (twenty five)
                dollars, depending on the date of purchase of the key.
              </p>
              <p>
                5.6. Quantum-IO reserves the right to decide whether to return
                or not return funds. Refunds are made only if the product is
                sold out and an extra payment was made.
              </p>
              <p>
                5.7. The user has the right to refuse to renew the subscription
                by canceling it through his personal account. In this case,
                there will be no new withdrawals from the User's card, and the
                money withdrawn in the last month of use will not be returned to
                the card
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>6. Other conditions</h2>
            <div className={styles.info}>
              <p>
                6.1. All possible disputes arising from this Agreement or
                related to it shall be resolved in accordance with the current
                legislation of the Russian Federation.
              </p>
              <p>
                6.2. Nothing in the Agreement can be understood as the
                establishment between the User and the Site Administration of
                agency relations, partnership relations, joint activity
                relations, personal employment relations, or any other relations
                not expressly provided for by the Agreement.
              </p>
              <p>
                6.3. Recognition by the court of any provision of the Agreement
                as invalid or not subject to enforceability does not entail the
                invalidity of other provisions of the Agreement.
              </p>
              <p>
                6.4. Inaction on the part of the Site Administration in case of
                violation by any of the Users of the provisions of the Agreement
                does not deprive the Site Administration of the right to take
                later appropriate actions in defense of their interests and
                copyright protection of the Site materials protected in
                accordance with the legislation.
              </p>
              <p>
                6.5. The user confirms that he is familiar with all the clauses
                of this Agreement and unconditionally accepts them.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>7. Details</h2>
            <div className={styles.info}>
              <p>IE Aperyan Alex Araratovich</p>
              <p>PSRNSP 321774600340291</p>
              <p>ITN 772400379180</p>
              <p>
                E-mail{" "}
                <a href="mailto:qntm.soft@gmail.com" className={styles.pointer}>
                  qntm.soft@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="infoBlock partners">
            <img
              src="/payment.svg"
              alt="Tinkoff Payment (Visa, Mastercard, Maestro, MIR)"
            />
          </div>
        </div>
      </div>

      <div className={styles.agreement}>
        <h1>Regular payments offer</h1>

        <p className={styles.important}>
          AGREEMENT ON PROVIDING INDIVIDUALS OF THE POSSIBILITY OF PAYMENT FOR
          GOODS / WORKS / SERVICES IE APERYAN ALEX ARARATOVICH THROUGH REGULAR
          AUTOMATIC MONEY TRANSFERS.
        </p>

        <p className={styles.important}>
          IE Aperyan Alex Araratovich, registered at the address 117534(zip
          code), Russia, Moscow, acting on the basis of certificate
          321774600340291, hereinafter referred to as the Supplier, invites
          Users to use the Recurrent Debit Service and conclude this agreement
          (hereinafter referred to as the Agreement), which is an addition to
          the Agreement and an integral part of the Agreement, on determining
          the procedure for settlements under the Agreement. The User
          unconditionally agrees with this Service Agreement by performing
          implicit actions to connect the Recurrent Debit Service at the time
          the User accepts this Service Agreement and perform actions to
          activate the Recurring Debit Service.
        </p>

        <div className={styles.content}>
          <div className={styles.infoBlock}>
            <h2>Terms and definitions</h2>
            <div className={styles.info}>
              <p>
                {" "}
                <span className={styles.name}>The Recurring Debit Service</span> - a
                service for the implementation of regular automatic transfers of
                funds from the Holder's Bank Card in favor of the Supplier for
                the goods / services provided by the Supplier under the
                Agreement on the basis of the previously given acceptance of the
                Cardholder, in accordance with the tariffs and options under the
                Agreement.{" "}
              </p>
              <p>
                {" "}
                <span className={styles.name}>Contract</span> - a bilateral agreement
                concluded between the User and the Supplier under the terms of
                which the Supplier undertakes to provide the User with the
                Service, and the latter undertakes to pay for them.{" "}
              </p>
              <p>
                {" "}
                <span className={styles.name}>Service / Product</span> - the provision
                by the Supplier of a service / product from the range of the
                site{" "}
                <a href="https://dash.qntmru.io" className={styles.pointer}>
                  https://dash.qntmru.io
                </a>
                .
              </p>
              <p>
                {" "}
                <span className={styles.name}>User</span> - an individual who has
                entered into an Agreement with the Supplier.
              </p>
              <p>
                {" "}
                <span className={styles.name}>Bank</span> - credit institution - JSC
                "Tinkoff Bank" BIK: 044525974K / s: 30101810145250000974
              </p>
              <p>
                {" "}
                <span className={styles.name}>Request</span> - an information message
                sent by the Bank to the Issuing Bank to transfer funds from the
                Bank card to for the benefit of the Supplier.{" "}
              </p>
              <p>
                {" "}
                <span className={styles.name}>The issuing bank</span> - a credit
                institution that issues Bank cards, as well as settlements for
                transactions performed using Bank cards.{" "}
              </p>
              <p>
                {" "}
                <span className={styles.name}>Processing center</span> - JSC "Tinkoff
                Bank" BIK: 044525974K / s: 30101810145250000974.{" "}
              </p>
              <p>
                {" "}
                <span className={styles.name}>Cardholder</span> - an individual who
                gives an order to the Issuing Bank to transfer funds from the
                Bank Card on behalf of the User in favor of the Supplier using
                the "Recurring Debit" Service.{" "}
              </p>
              <p>
                <span className={styles.name}>Bank card</span> - payment or credit card
                issued by The Issuing Bank, which is a non-cash settlement
                instrument, intended for the Cardholder to perform transactions
                with funds in the Cardholder's bank accounts with the Issuing
                Bank, or with funds provided by the Issuing Bank on credit to
                the Cardholder in accordance with the legislation of the Russian
                Federation, as well as the bank account agreement, or within the
                established limit, in accordance with the terms of the loan
                agreement between the Issuing Bank and the Cardholder, provided
                that such payment or credit card can be used by the Cardholder
                to pay for the Supplier's Services. Payment for the Supplier's
                Services in accordance with this Agreement is possible with Bank
                cards of payment systems VISA International, MasterCard
                International, registered in accordance with the current
                legislation of the Russian Federation. At the same time, the
                issuing bank establishes the possibility of using specific types
                of VISA International and MasterCard International cards.
              </p>
              <p>
                {" "}
                <span className={styles.name}>User Acceptance</span> - the User's
                unconditional agreement with the terms of this Agreement.
              </p>
              <p>
                {" "}
                <span className={styles.name}>Personal Account</span> - a section of
                the Supplier's Site, protected by an access control system that
                provides the User with an interface for interacting with the
                Supplier under the Agreement.{" "}
              </p>
              <p>
                {" "}
                <span className={styles.name}>Supplier's Site</span> - a site located
                on the Internet at:{" "}
                <a href="https://qntmru.io" className={styles.pointer}>
                  https://dash.qntmru.io
                </a>
                .
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>
              1. Description of the service "recurrent charges" and the method
              of its activation.
            </h2>
            <div className={styles.info}>
              <p>
                1.1 Activation (connection) of the Service "Recurring
                write-offs" involves the following actions:{" "}
              </p>
              <p className={styles.point}>
                1.1.1. On the purchase page of the Supplier's Website, the User
                enters an e-mail mail and clicks the "Purchase" button. After
                paying for the goods selected by the User, the service
                “Recurring write-offs” is connected.
              </p>
              <p className={styles.point}>
                1.1.2. In the personal account of the Supplier's Site, the User
                clicks the “Activate” button in the “Auto-payment” section.
                After that, the User pays the minimum amount to connect to the
                “Recurring Debit” Service. Funds are immediately returned to the
                User's Bank card, but Recurring debits will be made from the
                Bank card.{" "}
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>2. Action of the Service "Recurring debits"</h2>
            <div className={styles.info}>
              <p>
                2.1. After connecting the Service "Recurring Debit", funds will
                be transferred from the Bank Card in the time and amount
                necessary for the proper performance of the User's obligations
                under the Agreement.{" "}
              </p>
              <p>
                2.2. Direct debiting of funds is carried out by the Issuing Bank
                on the basis of the User's prior consent to such a write-off in
                the amount and within the period specified in the Agreement. A
                request for a transfer of funds with an indication of the amount
                of transfer to the Issuing Bank is submitted by the Bank and the
                Processing Center within the framework of the agreements
                concluded with the Supplier.{" "}
              </p>
              <p>
                2.3. At one point in time, the User can activate (connect) the
                Service "Recurring debits" only for one Bank card of the payment
                system Visa (Visa Inc.), MasterCard or Maestro (MasterCard
                International Inc.).
              </p>
              <p>
                2.4. The Supplier does not store and process the data of the
                User's bank cards, as well as other personal data of the Users,
                providing only requests to the Processing Center and the Bank
                for the repeated operation of the User's bank card.{" "}
              </p>
              <p>
                2.5. The Supplier does not guarantee the possibility of carrying
                out operations with the Bank Card.
              </p>
              <p>
                2.6. The User guarantees that he is the Bank Card Holder,
                consciously, correctly and completely enters all the required
                Bank Card details when activating (connecting) the Recurring
                Debit Service.
              </p>
              <p>
                2.7. Performing the actions provided for in clause 1.1.1 and
                1.1.2 Of the Agreement is recognized as an analogue of the
                User's handwritten signature.
              </p>
              <p>
                2.8. Connection of the Service "Recurring debits", in the manner
                prescribed by this Agreement for the use of the service, is
                carried out only if the Supplier, the Processing Center, the
                Bank, of the Issuing Bank are technically able. The Supplier,
                the Processing Center, the Bank are not responsible for the
                impossibility of connecting Service "Recurring write-offs."
              </p>
              <p>
                2.9. The Supplier has the right to amend this Service Agreement
                by notifying the User in writing in advance or by any other
                available means, including by sending an e-mail specified in the
                Agreement by the User, or by telephone message, or by posting
                information on Supplier's website.{" "}
              </p>
              <p>
                2.10 Funds are debited from the User's Bank card once a calendar
                month.{" "}
              </p>
              <p>
                2.11 The date of the next debiting the User can view in the
                personal account of the Supplier's website.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>3. Disabling the Service "Recurring write-offs".</h2>
            <div className={styles.info}>
              <p>
                3.1. Disconnection (refusal) of the User from the "Recurring
                Debit" Service occurs:{" "}
              </p>
              <p className={styles.point}>
                A) In the "Personal Account" the User clicks the "Cancel" button
                in the "Auto-payment" section <br />
                In this case, the funds transferred from the Bank Cards are not
                returned to the User until the User is disconnected (refused)
                from the Service "Recurring Debit" for the Services
              </p>
              <p>
                3.2. In case of insufficient funds on the Bank Card account for
                making a transfer, the Supplier has the right to repeat the
                request to write off funds from the Bank Card.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>4. Restrictions when using the Recurrent Debit Service.</h2>
            <div className={styles.info}>
              <p>
                4.1. no more than 5 (five) transfers per day can be made from
                one Bank Card
              </p>
              <p>
                4.2. no more than 15,000 rubles can be transferred from one Bank
                card for one operation
              </p>
              <p>
                4.3. no more than 50,000 rubles per day can be transferred from
                one Bank card
              </p>
              <p>
                4.4. the transition to the page "Make a payment" is possible
                only if the User has an Internet connection, regardless of the
                current state of the account.
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>5. Responsibility of the parties.</h2>
            <div className={styles.info}>
              <p>
                5.1. The Supplier, the Processing Center, the Bank is not
                responsible for the inoperability and / or temporary
                inoperability of the "Recurrent Debit" Service. The User
                independently controls the fulfillment of his obligation to pay
                under the Agreement. In case of inoperability and / or temporary
                inoperability of the "Recurring Debit" Service, the User is
                obliged to use other methods of fulfilling obligations under the
                Agreement.
              </p>
              <p>
                5.2.Disputes between the parties arising in connection with the
                fulfillment of the terms of this Agreement are resolved in the
                course of sending claims.
              </p>
              <p>
                5.3. If the Parties fail to reach mutual agreement, disputes
                between them are resolved in accordance with the terms of the
                Agreement and the Offer.{" "}
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2>6. Other terms and conditions.</h2>
            <div className={styles.info}>
              <p>
                6.1. Performing actions to connect the Service "Recurring
                write-offs":{" "}
              </p>
              <p className={styles.point}>
                A) The User unconditionally agrees with all the terms of this
                Agreement.{" "}
              </p>
              <p className={styles.point}>
                B) The User gives in advance this acceptance for the write-off
                of funds 1 Supplier from a Bank Card on the terms of this
                Agreement.{" "}
              </p>
              <p className={styles.point}>
                C) The User grants the Processing Center, the Bank the right to
                store, collect, process his personal data (Surname, Name,
                Patronymic, passport series and number , place and date of
                birth, current account and Bank card number ) in order to
                implement this Agreement.
              </p>
              <p className={styles.point}>
                D) The User agrees to pay for the Services in accordance with
                the terms of the Agreement
              </p>
              <p>
                6.2. The Provider has the right to disconnect and / or restrict
                the User from the Service
              </p>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h1>«Recurring write-offs»</h1>
            <p className={styles.important}>
              RIGHTS AND OBLIGATIONS OF THE USER AND THE SUPPLIER ARISING FROM
              THIS OFFER CANNOT BE TRANSFERRED TO THIRD PARTIES WITHOUT WRITTEN
              CONSENT OF THE OTHER PARTY. I, the USER, ARE AWARE AND AGREE WITH
              THIS AGREEMENT FOR USE OF THE "RECURRENT PAYMENTS" SERVICE, WITH
              AUTOMATIC CHARGING OF MONEY FROM THE BANK CARD for the Supplier's
              services under the Agreement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAgreementPage;
