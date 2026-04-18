import React, { useState } from 'react';
import bgVideo from './assets/video.mov';
import clipVideo from './assets/iuem.mov';

export default function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [showInnerVideo, setShowInnerVideo] = useState(false);
  
  const [currentPage, setCurrentPage] = useState('home'); 

  const closeLetterAndReset = () => {
    setIsLetterOpen(false);
    setTimeout(() => setShowInnerVideo(false), 300);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[hsl(var(--background))]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={bgVideo} 
      />

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6">
        <div className="hidden items-center gap-8 md:flex">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`text-sm transition-colors hover:text-[hsl(var(--foreground))] ${currentPage === 'home' ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--muted-foreground))]'}`}
          >
            Home
          </button>
          
          <button 
            onClick={() => setCurrentPage('story')}
            className={`text-sm transition-colors hover:text-[hsl(var(--foreground))] ${currentPage === 'story' ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--muted-foreground))]'}`}
          >
            Story
          </button>
          
          <button 
            onClick={() => setCurrentPage('about')}
            className={`text-sm transition-colors hover:text-[hsl(var(--foreground))] ${currentPage === 'about' ? 'text-[hsl(var(--foreground))]' : 'text-[hsl(var(--muted-foreground))]'}`}
          >
            About
          </button>
        </div>
        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-[hsl(var(--foreground))] hover:scale-[1.03]">
          Begin Journey
        </button>
      </nav>

      {/* =========================================
          XỬ LÝ CHUYỂN TRANG
          ========================================= */}
      
      {/* ------ 1. NỘI DUNG TRANG HOME ------ */}
      {currentPage === 'home' && (
        <main className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 pt-32 pb-40 text-center">
          <h1 
             className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
             style={{ fontFamily: "var(--font-display)", color: "hsl(var(--foreground))" }}>
            Chúc mừng sinh nhật em bé iu của anh <em className="not-italic text-[hsl(var(--muted-foreground))]"></em> {' '}
          </h1>
          
          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-[hsl(var(--foreground))] sm:text-lg">
            em bé thúi địt của tui
          </p>

          <button 
            onClick={() => setIsLetterOpen(true)}
            className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-[hsl(var(--foreground))] hover:scale-[1.03]"
          >
            nhấn đi
          </button>
        </main>
      )}

      {/* ------ 2. NỘI DUNG TRANG STORY (COMING SOON) ------ */}
      {currentPage === 'story' && (
        <main className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 pt-10 pb-20 text-center">
          <div className="liquid-glass animate-fade-rise mx-auto flex w-full max-w-2xl flex-col items-center justify-center rounded-3xl p-16">
            <h2 className="mb-6 text-5xl text-[hsl(var(--foreground))]" style={{ fontFamily: "var(--font-display)" }}>
              Chuyện tình đôi ta 📖
            </h2>
            <div className="text-3xl font-light tracking-widest text-[hsl(var(--muted-foreground))]">
              COMING SOON
            </div>
            <p className="mt-8 text-base leading-relaxed text-[hsl(var(--foreground))]">
              <br/>Quay lại sau nhé cục zàng!
            </p>
            <button 
              onClick={() => setCurrentPage('home')}
              className="liquid-glass mt-10 rounded-full px-8 py-3 text-sm text-[hsl(var(--foreground))] hover:scale-[1.03]"
            >
              Quay lại trang chủ
            </button>
          </div>
        </main>
      )}

      {/* ------ 3. NỘI DUNG TRANG ABOUT (GIỚI THIỆU 2 ĐỨA) ------ */}
      {currentPage === 'about' && (
        <main className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 pt-10 pb-20">
          <h2 className="animate-fade-rise mb-12 text-center text-5xl text-[hsl(var(--foreground))]" style={{ fontFamily: "var(--font-display)" }}>
            2 đứa nè
          </h2>

          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* THẺ SỐ 1: VỀ BÉ GIANG */}
            <div className="liquid-glass animate-fade-rise-delay flex flex-col items-center rounded-3xl p-8 text-center">
              <img src="/embe.jpg" alt="Giang" className="mb-6 h-48 w-48 rounded-full object-cover shadow-lg border-2 border-[hsl(var(--border))]" />

              <h3 className="mb-2 text-3xl text-[hsl(var(--foreground))]" style={{ fontFamily: "var(--font-display)" }}>
                Cục zàng của anh
              </h3>
              <p className="text-base leading-relaxed text-[hsl(var(--foreground))]">
                Người con gái có siêu năng lực làm anh vui cả ngày nhưng thỉnh thoảng cũng hay cắn bậy. Tính tình lúc nắng lúc mưa, hay dỗi nhưng dỗ cái là hết . Đặc điểm nhận dạng: Rất xinh đẹp và là của anh!
              </p>
            </div>

            {/* THẺ SỐ 2: VỀ ANH PHÁT */}
            <div className="liquid-glass animate-fade-rise-delay-2 flex flex-col items-center rounded-3xl p-8 text-center">
              <img src="/phat.jpg" alt="Phát" className="mb-6 h-48 w-48 rounded-full object-cover shadow-lg border-2 border-[hsl(var(--border))]" />

              <h3 className="mb-2 text-3xl text-[hsl(var(--foreground))]" style={{ fontFamily: "var(--font-display)" }}>
                Cu li
              </h3>
              <p className="text-base leading-relaxed text-[hsl(var(--foreground))]">
                hotboiz đẹp trai, vui tính, thỉnh thoảng hơi ngơ ngơ nhưng được cái thương người yêu số 1. Luôn sẵn sàng làm bao cát cho ai kia giận dỗi. Phương châm sống: "Sợ vợ sống lâu, đội vợ lên đầu là trường sinh bất lão".
              </p>
            </div>

          </div>
        </main>
      )}

      {/* KHU VỰC POPUP BỨC THƯ */}
      {isLetterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-300">
          <div className="animate-fade-rise relative mx-4 w-full max-w-2xl rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 p-10 text-center shadow-2xl backdrop-blur-xl">
            <button 
              onClick={closeLetterAndReset}
              className="absolute right-6 top-6 z-10 text-2xl text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
            >
              ✕
            </button>
            {!showInnerVideo ? (
              <div className="animate-fade-rise">
                <h2 className="mb-6 text-4xl text-[hsl(var(--foreground))]" style={{ fontFamily: "var(--font-display)" }}>
                  Gửi em bé... 💌
                </h2>
                <p className="mb-8 text-base leading-relaxed text-[hsl(var(--foreground))]">
                  Chúc mừng sinh nhật cục zàng của anh. Anh iu em nhiều nhiều nhiều nhiều lắm, anh rất biết ơn cuộc đời này khi được gặp em và có em trong cuộc sống anh. Anh biết anh chưa tốt không làm em vui nhiều và còn làm em khóc nữa anh rất biết ơn và trân trọng em vì em là người mà có thể khóc vì anh quan tâm anh và iu anh. Anh chỉ mong muốn cuộc sống em sau này sẽ đúng như mong ước em và anh ngày càng mạnh mẽ hơn để biến ước mơ em thành thực. Tuổi mới anh chúc em tất cả ngoại trừ vất vả, bớt cãi lời anh lại và thành công trong công việc lẫn việc iu anh. Anh iu em nhiều lắm sẽ lun bên em và đồng hành cùng em.
                </p>
                <button 
                  onClick={() => setShowInnerVideo(true)}
                  className="liquid-glass rounded-full px-8 py-3 text-sm text-[hsl(var(--foreground))] hover:scale-[1.03]"
                >
                  cô bé thúi địt của tui
                </button>
              </div>
            ) : (
              <div className="animate-fade-rise flex flex-col items-center">
                <h2 className="mb-6 text-3xl text-[hsl(var(--foreground))]" style={{ fontFamily: "var(--font-display)" }}>
                  Tặng em nè 🥰
                </h2>
                <video controls autoPlay className="mb-8 w-full max-w-lg rounded-xl border border-[hsl(var(--border))] shadow-lg" src={clipVideo} />
                <div className="flex gap-4">
                  <button onClick={() => setShowInnerVideo(false)} className="liquid-glass rounded-full px-6 py-2.5 text-sm text-[hsl(var(--foreground))] hover:scale-[1.03]">
                    Đọc lại thư
                  </button>
                  <button onClick={closeLetterAndReset} className="liquid-glass rounded-full px-6 py-2.5 text-sm text-[hsl(var(--foreground))] hover:scale-[1.03]">
                    Đóng lại
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}