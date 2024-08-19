import "./ServicePage.css";
import bgCloud from "../../assets/bgCloud.webp";
import bgCyber from "../../assets/bgCyber.jpg";
import bgData from "../../assets/bgData.avif";
import bgDev from "../../assets/bgDev.avif";
import bgSap from "../../assets/bgSap.avif";
import bgScript from "../../assets/bgScript.jpg";
import Navbar from "../Navbar";
import FooterNav from "../FooterNav";
const ServicePage = ({value}) => {


  const contentMap = {
    "Data Analysis": {
      bgImg: bgData,
      topHeading: "Transforming Data into Actionable Insights",
      topContent:
        "In today's data-driven world, harnessing the power of data is crucial for staying competitive. Our Data Analyst services provide the expertise and tools you need to unlock the full potential of your data, enabling you to make informed decisions that drive business growth.",
      sections: [
        {
          heading: "Data Collection and Integration",
          content:
            "We gather and integrate data from various sources to create a comprehensive and cohesive dataset. Whether it’s internal databases, third-party APIs, or unstructured data, we ensure that all relevant information is captured and organized efficiently.",
        },
        {
          heading: "Data Cleaning and Preparation",
          content:
            "Raw data often comes with inconsistencies and errors. Our team meticulously cleans and preprocesses your data, ensuring accuracy and reliability. This step is critical for producing meaningful analyses and insights.",
        },
        {
          heading: "Data Analysis and Visualization",
          content:
            "Our analysts employ advanced statistical techniques and machine learning algorithms to uncover patterns, trends, and correlations within your data. We then present these findings through intuitive visualizations, making complex data easily understandable.",
        },
        {
          heading: "Predictive Analytics",
          content:
            "Leverage our predictive analytics services to forecast future trends and outcomes. By analyzing historical data, we can help you anticipate challenges and opportunities, allowing you to stay ahead of the curve.",
        },
        {
          heading: "Business Intelligence Reporting",
          content:
            "We create customized business intelligence reports that provide a holistic view of your key performance indicators (KPIs). These reports are tailored to meet the specific needs of your organization, enabling you to monitor performance and make data-driven decisions.",
        },
        {
          heading: "Dashboard Development",
          content:
            "We design and implement interactive dashboards that give you real-time access to your data. These dashboards are user-friendly and can be customized to display the metrics that matter most to your business.",
        },
      ],
      bottomHeading: "Get Started Today",
      bottomContent:
        "Unlock the power of your data with our comprehensive Data Analyst services. Contact us today to schedule a consultation and discover how we can help you transform your data into actionable insights.",
    },
    "Product Development": {
      bgImg: bgDev,
      topHeading: "Turning Ideas into Market-Ready Products",
      topContent:
        "In a fast-paced, innovation-driven market, transforming your ideas into successful products is essential for staying ahead. Our Product Development services provide the expertise, processes, and resources needed to bring your vision to life, from concept to market launch.",
      sections: [
        {
          heading: "Ideation and Concept Development",
          content:
            "We work with you to brainstorm, refine, and validate product ideas. Our team collaborates closely with your stakeholders to ensure that the product concept aligns with your business objectives and market needs.",
        },
        {
          heading: "Market Research and Analysis",
          content:
            "Understanding the market landscape is critical to product success. We conduct thorough market research and competitive analysis to identify opportunities, customer pain points, and industry trends. This ensures that your product is positioned to meet market demands.",
        },
        {
          heading: "Product Design and Prototyping",
          content:
            "Our design team creates detailed product designs, focusing on functionality, user experience, and aesthetics. We then develop prototypes that allow for testing and refinement before full-scale production, reducing risk and ensuring the product meets all specifications.",
        },
        {
          heading: "Engineering and Development",
          content:
            "With a multidisciplinary team of engineers and developers, we handle the technical aspects of product development. From hardware engineering to software development, we bring your product to life with precision and quality.",
        },
        {
          heading: "Testing and Quality Assurance",
          content:
            "We rigorously test your product to ensure it meets the highest standards of quality and performance. Our testing process includes functional testing, user acceptance testing, and quality assurance checks to identify and resolve any issues before launch.",
        },
        {
          heading: "Product Launch and Go-to-Market Strategy",
          content:
            "Launching a product successfully requires a well-planned strategy. We assist with everything from marketing and sales strategies to distribution and logistics planning, ensuring that your product reaches the right audience effectively.",
        },
      ],
      bottomHeading: "Let's Innovate Together",
      bottomContent:
        "Ready to turn your ideas into reality? Contact us today to discuss your product development needs and learn how we can help you create market-leading products.",
    },
    "SAP Development": {
      bgImg: bgSap,
      topHeading: "Streamlining Business Processes with SAP Solutions",
      topContent:
        "SAP Development services are vital for organizations looking to optimize their business processes and achieve operational excellence. Our team of SAP experts offers customized solutions that integrate seamlessly with your existing systems, ensuring you get the most out of your SAP investment.",
      sections: [
        {
          heading: "SAP Implementation",
          content:
            "We provide end-to-end SAP implementation services, from initial consultation and planning to configuration, deployment, and support. Our approach ensures that the SAP system is tailored to your business requirements, leading to smooth and effective adoption.",
        },
        {
          heading: "Custom SAP Development",
          content:
            "Our team develops custom SAP applications and enhancements that address your unique business challenges. Whether it's extending standard SAP functionalities or creating entirely new modules, we deliver solutions that drive efficiency and innovation.",
        },
        {
          heading: "SAP Integration",
          content:
            "Seamless integration of SAP with other enterprise systems is crucial for unified operations. We specialize in integrating SAP with various third-party applications, cloud platforms, and legacy systems, ensuring consistent data flow and operational harmony.",
        },
        {
          heading: "SAP Support and Maintenance",
          content:
            "Our comprehensive support and maintenance services ensure that your SAP environment runs smoothly. We offer ongoing monitoring, troubleshooting, and performance optimization, so you can focus on your core business while we handle the technical aspects.",
        },
        {
          heading: "SAP Upgrades and Migrations",
          content:
            "Stay ahead with the latest SAP versions and technologies. We assist with SAP system upgrades and migrations, ensuring minimal disruption to your operations while enhancing system capabilities and performance.",
        },
      ],
      bottomHeading: "Optimize Your Business with SAP",
      bottomContent:
        "Ready to maximize the potential of your SAP systems? Contact us today to learn how our SAP Development services can streamline your business processes and drive growth.",
    },
    "Cyber Security": {
      bgImg: bgCyber,
      topHeading:
        "Protecting Your Business with Advanced Cyber Security Solutions",
      topContent:
        "In an era of increasing cyber threats, safeguarding your business's digital assets is more critical than ever. Our Cyber Security services provide comprehensive protection against data breaches, cyberattacks, and other security risks, ensuring the integrity and confidentiality of your information.",
      sections: [
        {
          heading: "Threat Assessment and Vulnerability Management",
          content:
            "We conduct thorough assessments of your IT infrastructure to identify potential vulnerabilities. Our experts provide actionable recommendations to strengthen your defenses and minimize risks.",
        },
        {
          heading: "Network Security",
          content:
            "Our network security services ensure that your internal and external networks are protected against unauthorized access, malware, and other cyber threats. We implement firewalls, intrusion detection systems, and other measures to secure your network.",
        },
        {
          heading: "Endpoint Security",
          content:
            "We provide comprehensive endpoint security solutions to protect all devices connected to your network. Our services include antivirus, anti-malware, and device management to ensure every endpoint is secure.",
        },
        {
          heading: "Incident Response and Recovery",
          content:
            "In the event of a security breach, our incident response team is ready to act swiftly. We minimize damage, contain the threat, and help you recover quickly with minimal disruption to your operations.",
        },
        {
          heading: "Compliance and Data Protection",
          content:
            "We help you stay compliant with industry regulations and data protection laws. Our services include data encryption, access control, and regular audits to ensure your business meets all legal and regulatory requirements.",
        },
      ],
      bottomHeading: "Secure Your Business Today",
      bottomContent:
        "Don’t wait until it’s too late. Contact us today to learn how our Cyber Security services can protect your business from the ever-evolving threat landscape.",
    },
    "Script/Bot Development": {
      bgImg: bgScript,
      topHeading: "Automating Tasks with Custom Script and Bot Development",
      topContent:
        "Streamline your operations and increase efficiency with our Script and Bot Development services. We create custom scripts and bots that automate repetitive tasks, enhance productivity, and reduce human error, allowing your team to focus on more strategic activities.",
      sections: [
        {
          heading: "Custom Script Development",
          content:
            "Our developers create custom scripts tailored to your specific needs. Whether it's automating data entry, processing transactions, or managing workflows, we deliver scripts that integrate seamlessly with your existing systems.",
        },
        {
          heading: "Chatbot Development",
          content:
            "Enhance customer engagement and support with intelligent chatbots. Our chatbots are designed to handle a wide range of tasks, from answering FAQs to processing orders, providing 24/7 assistance to your customers.",
        },
        {
          heading: "Robotic Process Automation (RPA)",
          content:
            "Our RPA solutions automate complex business processes, reducing the need for manual intervention. We help you deploy bots that can handle tasks such as invoice processing, data migration, and more, improving efficiency and accuracy.",
        },
        {
          heading: "Integration with Existing Systems",
          content:
            "We ensure that your scripts and bots integrate smoothly with your current IT infrastructure. Our team handles all aspects of integration, from API connections to data synchronization, ensuring a seamless experience.",
        },
        {
          heading: "Ongoing Support and Maintenance",
          content:
            "We provide ongoing support and maintenance for all scripts and bots we develop. Our services include updates, troubleshooting, and performance optimization, ensuring your automation tools remain effective and reliable.",
        },
      ],
      bottomHeading: "Automate Your Workflow Today",
      bottomContent:
        "Ready to boost your business’s efficiency with custom scripts and bots? Contact us today to discuss your needs and learn how we can help you automate your workflows.",
    },
    "Cloud Services": {
      bgImg: bgCloud,
      topHeading: "Empowering Your Business with Scalable Cloud Solutions",
      topContent:
        "In the digital age, leveraging the cloud is essential for business agility and scalability. Our Cloud Services provide you with the infrastructure, tools, and expertise needed to migrate, manage, and optimize your operations in the cloud, enabling you to focus on what matters most—your business.",
      sections: [
        {
          heading: "Cloud Migration",
          content:
            "We assist businesses in migrating their existing infrastructure to the cloud. Our team ensures a smooth transition with minimal downtime, migrating data, applications, and workloads securely and efficiently.",
        },
        {
          heading: "Cloud Infrastructure Management",
          content:
            "Our cloud infrastructure management services include monitoring, maintenance, and optimization of your cloud resources. We ensure that your cloud environment is secure, cost-effective, and aligned with your business goals.",
        },
        {
          heading: "Cloud Security",
          content:
            "We provide robust cloud security solutions to protect your data and applications. Our services include encryption, identity and access management, and continuous monitoring to safeguard your cloud environment against threats.",
        },
        {
          heading: "Cloud Application Development",
          content:
            "Our developers create cloud-native applications that are scalable, resilient, and optimized for performance. Whether you're building new applications or modernizing existing ones, we deliver solutions that leverage the full power of the cloud.",
        },
        {
          heading: "Disaster Recovery and Backup",
          content:
            "We help you implement disaster recovery and backup solutions in the cloud, ensuring that your data is safe and recoverable in case of an emergency. Our services include automated backups, failover strategies, and regular testing.",
        },
      ],
      bottomHeading: "Take Your Business to the Cloud",
      bottomContent:
        "Ready to harness the power of the cloud? Contact us today to learn how our Cloud Services can transform your business operations and drive growth.",
    },
  };

  const content = contentMap[value] || {};

  return <>
    <Navbar/>
    <section className="service_page">
      <div
        className="heading"
        style={{ backgroundImage: `url(${content.bgImg})` }}
      >
        <h1>{value}</h1>
      </div>

      <div className="service_page_content">
        <h2>{content.topHeading}</h2>
        <p>{content.topContent}</p>

        <h2>Our Services</h2>
        {content.sections?.map((section, index) => (
          <div key={index}>
            <h3>{section.heading}</h3>
            <p>{section.content}</p>
          </div>
        ))}

        <h2>{content.bottomHeading}</h2>
        <p>{content.bottomContent}</p>

        <button>Contact Us</button>
      </div>
    </section>
    <FooterNav/>
    </>
};

export default ServicePage;