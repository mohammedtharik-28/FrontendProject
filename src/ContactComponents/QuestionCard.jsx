import { Link } from "react-router-dom";
import React, { useState } from "react";

function QuestionCard() {

    const [openIndex, setOpenIndex] = useState(null);

    const data = [
        {
            question: "What services do you offer?",
            answer: "Both. We use headless CMS, Wordpress, and modern static/site builders, or custom stacks when performance and scale require it. We offer fixed-price package for defined scopes, retainers for ongoing work, and custom quotes for complex builds."
        },
        {
            question: "How long does a typical project take?",
            answer: "Both. We use headless CMS, Wordpress, and modern static/site builders, or custom stacks when performance and scale require it. We offer fixed-price package for defined scopes, retainers for ongoing work, and custom quotes for complex builds.."
        },
        {
            question: "Do you build with a CMS or custom code?",
            answer: "Both. We use headless CMS, Wordpress, and modern static/site builders, or custom stacks when performance and scale require it. We offer fixed-price package for defined scopes, retainers for ongoing work, and custom quotes for complex builds."
        },
        {
            question: "Will I be involved during the project?",
            answer: "Both. We use headless CMS, Wordpress, and modern static/site builders, or custom stacks when performance and scale require it. We offer fixed-price package for defined scopes, retainers for ongoing work, and custom quotes for complex builds.."
        },
        {
            question: "Can you migrate our existing site or data?",
            answer: "Both. We use headless CMS, Wordpress, and modern static/site builders, or custom stacks when performance and scale require it. We offer fixed-price package for defined scopes, retainers for ongoing work, and custom quotes for complex builds."
        },
        {
            question: "Do you provide post-launch support?",
            answer: "Both. We use headless CMS, Wordpress, and modern static/site builders, or custom stacks when performance and scale require it. We offer fixed-price package for defined scopes, retainers for ongoing work, and custom quotes for complex builds."
        }
    ];

    return (
        <div>
            <div className='d-flex flex-md-row flex-column LetsTalk-head p-sm-6'>
                <p className='col-md-4'>Help & FAQs</p>
                <h1 className='col-md-8'>We're here to answer all your questions!</h1>
            </div>
            <div className="row">
                <div className="col-md-5 questionCard-contact">
                    <p>We craft bold brands, build fast websites, and launch products that scale business with decades of provesn & measureable results.</p>
                    <Link to="/contact"><button className='GetInTouch-btn'><i className='bi bi-arrow-right'></i><span>Contact US now</span></button></Link>
                </div>
                <div className="col-md-6">
                    {data.map((item, index) => (
                        <div key={index} className="questionCard-content">
                            <div className="question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h5>{item.question}</h5>
                                <span>{openIndex === index ? <i className="bi bi-dash"></i> : <i className="bi bi-plus"></i>}</span>
                            </div>
                            {openIndex === index && (
                                <p className="answer">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuestionCard