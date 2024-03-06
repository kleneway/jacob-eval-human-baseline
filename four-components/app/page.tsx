import StaticSection from "@/components/StaticSection";
import Testimonial from "@/components/Testimonial";
import Chart from "@/components/Chart";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <main>
      <StaticSection />
      <Testimonial />
      <Chart />
      <section className="container mx-auto font-inter my-20">
        <Toast
          heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae arcu, in nisi convallis rhoncus facilisi fames purus. Dictum sed phasellus dolor porttitor eget nulla vitae porttitor."
          bullets={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ]}
          buttons={[{ text: "Label" }, { text: "Label" }]}
        />
      </section>
    </main>
  );
}
