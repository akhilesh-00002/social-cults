import React, { useState, useEffect } from 'react';

// Import images
import client1 from '../assets/image/02.jpg';
import client2 from '../assets/image/02.jpg';
import client3 from '../assets/image/02.jpg';
import client4 from '../assets/image/02.jpg';
import client5 from '../assets/image/02.jpg';
import client6 from '../assets/image/02.jpg';

const TestimonialSectionNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonialList = [
    {
      name: "Abhinav Ekansh",
      image: client1,
      text: "Social Cults is a powerhouse in digital marketing. Their strategies helped us achieve a 300% increase in online engagement and significantly boosted our sales revenue within just three months.",
      rating: 5,
      company: "Tech Solutions Inc.",
      role: "CEO",
    },
    {
      name: "Ankita Singh",
      image: client2,
      text: "I've recommended Social Cults to several friends and colleagues because their approach to digital marketing is simply outstanding. They understand the client's vision and deliver beyond expectations.",
      rating: 5,
      company: "Creative Minds Ltd.",
      role: "Marketing Director",
    },
    {
      name: "Prachi Purohit",
      image: client3,
      text: "Choosing Social Cults was one of the best decisions for our business. Their team is professional, creative, and results-driven. Our social media presence has never been stronger!",
      rating: 5,
      company: "Innovate Corp",
      role: "Business Owner",
    },
    {
      name: "Ajay Kumar",
      image: client4,
      text: "Social Cults transformed our online presence completely. Their data-driven strategies and consistent performance tracking helped us achieve our marketing goals efficiently and effectively.",
      rating: 5,
      company: "Business Growth Co.",
      role: "Founder",
    },
    {
      name: "Priya Thakur",
      image: client5,
      text: "Social Cults helped my business take off when we were struggling to gain traction online. Their expertise in SEO and content marketing brought us qualified leads consistently.",
      rating: 5,
      company: "StartUp Ventures",
      role: "Entrepreneur",
    },
    {
      name: "Sheetal Singh",
      image: client6,
      text: "As a small business owner, I was hesitant about investing in digital marketing. Social Cults proved it was worth every penny with measurable results and excellent ROI.",
      rating: 5,
      company: "Small Business Hub",
      role: "Owner",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const slide = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialList.length);
    }, 4000);

    return () => clearInterval(slide);
  }, [isAutoPlay, testimonialList.length]);

  const changeSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      (prev - 1 + testimonialList.length) % testimonialList.length
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialList.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`tstar-new ${i < count ? 'tstar-fill-new' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="tsec-new">
      <div className="tcontainer-new">

        {/* Header */}
        <div className="thead-new">
          <div className="tbadge-new">
            <span className="tbadge-dot-new"></span>
            Client Feedback
          </div>
          <h2 className="ttitle-new">
            Loved by <span className="tgradient-new">1,500+ Businesses</span>
          </h2>
          <p className="tdesc-new">
            See why brands trust Social Cults for exceptional digital marketing.
          </p>
        </div>

        {/* Carousel */}
        <div className="tcarousel-new">
          <div className="twrap-new">
            <div
              className="ttrack-new"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialList.map((item, i) => (
                <div key={i} className="tcard-new">
                  <div className="tquote-new">"</div>

                  <div className="tstars-box-new">{renderStars(item.rating)}</div>

                  <blockquote className="ttext-new">{item.text}</blockquote>

                  <div className="tclient-box-new">
                    <div className="tavatar-new">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="tavatar-fallback-new">
                        {item.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    </div>

                    <div className="tinfo-new">
                      <h4 className="tname-new">{item.name}</h4>
                      <p className="tcompany-new">{item.company}</p>
                      <span className="trole-new">{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="tcontrols-new">
            <button className="tbtn-new" onClick={prevSlide}>
              ❮
            </button>

            <div className="tdots-new">
              {testimonialList.map((_, i) => (
                <button
                  key={i}
                  className={`tdot-new ${i === activeIndex ? 'tdot-active-new' : ''}`}
                  onClick={() => changeSlide(i)}
                ></button>
              ))}
            </div>

            <button className="tbtn-new" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionNew;