{
  /* Hero Section */
}
<main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
      {/* Left Content */}
      <div className="space-y-8 animate-fade-in">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-pink-100 rounded-full text-sm font-medium text-amber-700 mb-4">
            <Sparkles size={16} className="mr-2" />
            {dict.hero.deal}
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-800 via-amber-700 to-pink-700 bg-clip-text text-transparent leading-tight">
            {dict.hero.title}
            <br />
            <span className="text-transparent bg-gradient-to-r from-amber-600 to-pink-600 bg-clip-text">
              {dict.hero.sub_title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-sans leading-relaxed max-w-lg">
            {dict.hero.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={bookingUrl}
            target="_blank"
            className="bg-gradient-to-r from-amber-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer hover:from-amber-300 flex items-center"
          >
            <Calendar size={20} className="mr-2" />
            {dict.hero.btn1}
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            className="border-2 border-gray-300 cursor-pointer text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-amber-600 hover:text-amber-600 transition-all duration-300 flex items-center"
          >
            <FaWhatsapp size={20} className="mr-2" />
            {dict.hero.btn2}
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 pt-8">
          <div className="text-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="inline fill-yellow-400 text-yellow-400"
              />
            ))}

            <a
              href="https://maps.app.goo.gl/yuDRYaELBkz27Sof6"
              target="_blank"
              className="flex text-lg items-center mt-2 gap-2"
            >
              <Image
                alt="hero"
                height={100}
                width={100}
                className="size-8 rounded-full"
                src={'/Google.webp'}
              />
              <p> {dict.hero.reviews}</p>
            </a>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600">
              {dict.hero.experience_year}
            </div>
            <div className="text-sm text-gray-600"> {dict.hero.exp}</div>
          </div>
        </div>
      </div>

      {/* Right Content - Hero Image */}
      <div className="relative">
        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
          {/* Main hand image container */}
          <div className="w-full rounded-3xl h-[600px] max-sm:h-[350px] flex items-center justify-center overflow-hidden border-b border-gray-300">
            <div className="text-center text-gray-500">
              <Image
                alt="hero"
                height={400}
                width={400}
                src={dict.hero.hero_img}
                className="bg-contain h-full w-full"
              />
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-80 animate-bounce"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-200 to-amber-200 rounded-full opacity-70 animate-pulse"></div>
      </div>
    </div>
  </div>
</main>;
