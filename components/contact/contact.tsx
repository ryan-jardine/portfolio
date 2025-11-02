import { MailIcon } from "lucide-react";
import { Button } from "../ui/button";
import { LinkedinIcon } from "../ui/icons/lucide-linkedin";

const Contact = () => {
  return (
    <div id="contact" className="py-16 text-center max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p className="text-muted-foreground text-lg">
        I’m always open to discussing new projects, opportunities, or
        collaborations.
      </p>
      <div className="flex justify-center gap-4">
        <Button>
          <a
            href="mailto:ryanjardine43@gmail.com"
            className="flex items-center gap-2"
          >
            <MailIcon />
            Email Me
          </a>
        </Button>
        <Button>
          <a
            href="https://www.linkedin.com/in/ryanjardine"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
