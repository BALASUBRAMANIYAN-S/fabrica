import { Accordion, AccordionTab } from "primereact/accordion";

export default function CustomAccordion() {
  return (
    <div className="card">
      <Accordion multiple activeIndex={0}>
        {/* Item 1 */}
        <AccordionTab
          header={
            <span className="flex items-center justify-between w-full font-bold">
              <span>(001) Web design and development</span>
              <span className="text-xl">+</span>
            </span>
          }
        >
          <div className="flex flex-col gap-4">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Web Design"
              className="rounded-xl shadow-md"
            />
            <h2 className="text-lg font-semibold">Web Design & Development</h2>
            <p className="text-gray-600">
              We provide modern and responsive web design and development
              services. From static websites to dynamic web apps, our solutions
              are optimized for performance and usability.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                HTML
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                CSS
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                React
              </span>
            </div>
          </div>
        </AccordionTab>

        {/* Item 2 */}
        <AccordionTab
          header={
            <span className="flex items-center justify-between w-full font-bold">
              <span>(002) Mobile App Development</span>
              <span className="text-xl">+</span>
            </span>
          }
        >
          <div className="flex flex-col gap-4">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Mobile App"
              className="rounded-xl shadow-md"
            />
            <h2 className="text-lg font-semibold">Mobile App Development</h2>
            <p className="text-gray-600">
              Build scalable and interactive mobile apps for Android and iOS
              platforms with modern frameworks and best practices.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                Flutter
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                React Native
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Kotlin
              </span>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
}
