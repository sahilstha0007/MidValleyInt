import React from 'react'

const Partner = () => {
  return (
<div className="mx-4 sm:mx-30 my-4 p-4 sm:p-5 md:p-20 rounded-lg">
<h2 className="text-3xl font-bold text-black text-center mb-8">
  Our University Partner
</h2>


<div className="relative flex flex-col lg:flex-row items-center ">
  <div className="flex-1 bg-[#0f4c5c] text-white p-10 rounded-lg">
    <h2 className="text-3xl font-bold mb-4">
        Title
    </h2>
    <img
      src="/img/holi.jpg"
      className="w-32 h-auto bg-white rounded-2xl mb-4"
    />
    <p className="text-md text-justify leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam omnis sapiente distinctio ex quo, nisi similique ab quibusdam soluta repellendus explicabo accusantium in doloremque molestiae eius ducimus dolorum, incidunt esse.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam omnis sapiente distinctio ex quo, nisi similique ab quibusdam soluta repellendus explicabo accusantium in doloremque molestiae eius ducimus dolorum, incidunt esse.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam omnis sapiente distinctio ex quo, nisi similique ab quibusdam soluta repellendus explicabo accusantium in doloremque molestiae eius ducimus dolorum, incidunt esse.
    </p>

  </div>

  <div className="relative flex-shrink-0 w-full lg:w-1/2">
  <img
    src="/img/holi.jpg"
    alt="Holi celebration"
    className="w-full h-auto rounded-lg"
  />
  <div
    className="
      absolute bottom-0 -left-8
      w-3/4 sm:w-2/3 max-w-xs
      bg-white p-4 rounded-lg shadow-md
    "
  >
    <p className="text-black text-sm font-semibold text-left">
      Your Gateway to an<br />International Degree in Nepal
    </p>
  </div>
</div>


 
  </div>
</div>  )
}

export default Partner