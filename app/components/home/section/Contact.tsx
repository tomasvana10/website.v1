import { Mail } from "lucide-react";
import { CardWrapper } from "../../layout/Wrappers";

export default function Contact() {
  return (
    <CardWrapper>
      <p>If you would like to get in touch, please email me.</p>
      <div className="card-actions">
        <a className="btn" href="mailto:inquiry@tomasvana.dev">
          <span>
            <Mail />
          </span>
          Open mailto link
        </a>
      </div>
    </CardWrapper>
  );
}

Contact.displayName = "Contact";
