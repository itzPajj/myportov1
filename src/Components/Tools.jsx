import React from 'react';

const Tools = () => {
  return (
    <section id="tools" className="">
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">Tools</h3>
          </div>
          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {/* Tool 1 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/tools1.png"
                alt="Tool 1"
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* Tool 2 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/tools2.png"
                alt="Tool 2"
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* Tool 3 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/tools3.png"
                alt="Tool 3"
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* Tool 4 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/tools4.png"
                alt="Tool 4"
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* Tool 5 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/tools5.png"
                alt="Tool 5"
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* Tool 6 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/tools6.png"
                alt="Tool 6"
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* Tool 7 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/tools7.png"
                alt="Tool 7"
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* Tool 8 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/tools8.png"
                alt="Tool 8"
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* Tool 9 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/tools9.png"
                alt="Tool 9"
                className="w-36 h-36 object-contain"
              />
            </div>
            {/* Tool 10 */}
            <div className="flex items-center justify-center">
              <img
                src="../../public/collab.png"
                alt="Tool 10"
                className="w-36 h-36 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
