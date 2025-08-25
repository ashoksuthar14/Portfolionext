import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

export const Clients = () => {
  return (
    <section id="certificates" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Certificates</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};
