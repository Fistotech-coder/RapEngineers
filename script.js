


let currentSlide = 0;
const slider = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slider-item').length;
const currentPageDisplay = document.getElementById('currentPage');
const pageInput = document.getElementById('pageInput');

function updatePageNumber() {
    currentPageDisplay.textContent = currentSlide + 1;
    pageInput.value = currentSlide + 1;

    playAudioForPage(currentSlide+1); 

    if (currentSlide + 1 === 3) {
      startThirdPageAnmation();
    }else if(currentSlide + 1 === 29){
      startThirdPageAnmations();
    }if (currentSlide + 1 === 42) {
      startThirdPageAnmations1();
    }else if(currentSlide + 1 === 43){
      startThirdPageAnmations2();
    }else if(currentSlide + 1 === 44){
      startThirdPageAnmations3();
    }else if(currentSlide + 1 === 53){
      startThirdPageAnmations4();
    }else if(currentSlide + 1 === 56){
      startThirdPageAnmations5();
    }else if(currentSlide + 1 === 55){
      startThirdPageAnmations6();
    }else if(currentSlide + 1 === 54){
      startThirdPageAnmations7();
    }
    else if(currentSlide + 1 === 35){
      startThirdPageAnmations10();
    }
    else if(currentSlide + 1 === 36){
      startThirdPageAnmations11();
    }else if(currentSlide + 1 === 44){
      startThirdPageAnmations44();
      console.log("Page 44");
    }else if(currentSlide + 1 === 51){
      startThirdPageAnmations51();
    }else if(currentSlide + 1 === 60){
      startThirdPageAnmations56();
    }

  if (currentSlide + 1 >= 6 && currentSlide + 1 <= 13) {
    MappageAnimations();
  }


  if (currentSlide + 1 >= 16 && currentSlide + 1 <= 25) {
    LogoAnimations();
  }


  if (currentSlide + 1 === 27) {
    triggerPneumaticAnimations();
  }else {
    removetriggerPneumaticAnimations(); 
  }
  if (currentSlide + 1 === 28) {
    triggerClassificationFadeIn();
  } else {
    removeClassificationFadeIn();
  }
  if (currentSlide + 1 === 30 ) {
    addPressureAnimation();
  } else {
    removePressureAnimation();
  }
  if ( currentSlide+1==31) {
    addPressureAnimation1();
  } else {
    removePressureAnimation1();
  }

  if ( currentSlide+1==33) {
    addRotaryValveAnimation()
  } else {
    removeRotaryValveAnimation()
  }

  if ( currentSlide+1==37) {
    animateBasicConstruction();
  } else {
    resetBasicConstructionAnimation();
  }
  
  const leftContainer = document.querySelector(".anivedio");
  const rightContainer = document.querySelector(".text-container");
  const paragraphs = document.querySelectorAll(".text-container .paragraph");

  if (currentSlide+1 === 38) {
    leftContainer.classList.add("animate-left");
    rightContainer.classList.add("animate-right");

    paragraphs.forEach((p, i) => {
      setTimeout(() => {
        p.style.opacity = "1";
        p.style.transform = "translateY(0)";
      }, 400 + i * 400);
    });
  } else {
    leftContainer.classList.remove("animate-left");
    rightContainer.classList.remove("animate-right");

    paragraphs.forEach((p) => {
      p.style.opacity = "0";
      p.style.transform = "translateY(20px)";
    });
  }
  

  const partOne = document.querySelector(".part-one");
  const partTwo = document.querySelector(".part-two");
  
  if (currentSlide + 1 === 39) {
    partOne.classList.add("animate-part-one");
    partTwo.classList.add("animate-part-two");
  } else {
    partOne.classList.remove("animate-part-one");
    partTwo.classList.remove("animate-part-two");
  }

  const leakageVideo = document.querySelector(".videoHoveranima");

if (currentSlide + 1 === 40) {
  leakageVideo.classList.add("animate-leakage");
} else {
  leakageVideo.classList.remove("animate-leakage");
}

const header21 = document.querySelector(".header21");
const row1 = document.querySelector(".row1");
if (currentSlide + 1 === 41) {
  header21.classList.add("animate-part-one");
  row1.classList.add("animate-part-two");
} else {
  header21.classList.remove("animate-part-one");
  row1.classList.remove("animate-part-two");
}

  
const capacitiesContainer = document.querySelector(".capacities-container");
const capacitiesImage = document.querySelector(".capacities-image");
const capacitiesTable = document.querySelector(".capacities-table");

if (currentSlide + 1 === 45) { 
  capacitiesContainer.classList.add("animate-capacities");
  capacitiesImage.classList.add("animate-capacities");
  capacitiesTable.classList.add("animate-capacities");
} else {
  capacitiesContainer.classList.remove("animate-capacities");
  capacitiesImage.classList.remove("animate-capacities");
  capacitiesTable.classList.remove("animate-capacities");
}

const listItems = document.querySelectorAll(".left-content1 ul li");

if (currentSlide+1 === 46) {
  listItems.forEach((list, index) => {
    list.style.animationDelay = `${index * 0.2}s`; // optional stagger
    list.classList.add("animate-listili");
  });
} else {
  listItems.forEach(list => {
    list.classList.remove("animate-listili");
    list.style.animationDelay = "0s"; // reset delay
  });
}
const listItems2 = document.querySelectorAll(".pointsanimate  li");
if (currentSlide+1 === 47) {
  listItems2.forEach((list, index) => {
    list.style.animationDelay = `${index * 0.2}s`; 
    list.classList.add("animate-listili");
  });
} else {
  listItems2.forEach(list => {
    list.classList.remove("animate-listili");
    list.style.animationDelay = "0s"; 
  });
}
const left1 = document.querySelector(".left1");
const right1 = document.querySelector(".right1");
if (currentSlide + 1 === 49) {
  left1.classList.add("animate-part-one");
  right1.classList.add("animate-part-two");
} else {
  left1.classList.remove("animate-part-one");
  right1.classList.remove("animate-part-two");
}

const exampletext = document.querySelector(".aniexample h2");
const sub1Items = document.querySelectorAll(".sub1 p");
const mathItems = document.querySelectorAll(".sub2 .math p");
const math2Items = document.querySelectorAll(".sub2 .math2 p");
if (currentSlide + 1 === 50) {
  exampletext.classList.add("animate-part-one");
  const allLines = [...sub1Items, ...mathItems, ...math2Items];
  allLines.forEach((p, index) => {
    p.classList.add("animate-capacities");
    p.style.animationDelay = `${index * 0.3}s`;
  });
} else {
  exampletext.classList.remove("animate-part-one");
  [...sub1Items, ...mathItems, ...math2Items].forEach(p => {
    p.classList.remove("animate-capacities");
    p.style.animationDelay = "0s";
  });
}




const sub2 = document.querySelectorAll(".sub1 > div");
const sub2Items = document.querySelectorAll(".sub2 li");
const right52 = document.querySelector(".right52");

if (currentSlide+1 === 52) {
  sub2.forEach((item, index) => {
    item.classList.add("animate-sub1");
    item.style.animationDelay = `${index * 0.3}s`;
  });

  sub2Items.forEach((item, index) => {
    item.classList.add("animate-sub2");
    item.style.animationDelay = `${(sub2.length + index) * 0.3}s`;
  });

  right52.classList.add("animate-right52");
  right52.style.animationDelay = `${(sub2.length + sub2Items.length) * 0.3}s`;
} else {

  sub2.forEach(item => {
    item.classList.remove("animate-sub1");
    item.style.animationDelay = "0s";
  });
  sub2Items.forEach(item => {
    item.classList.remove("animate-sub2");
    item.style.animationDelay = "0s";
  });
  right52.classList.remove("animate-right52");
  right52.style.animationDelay = "0s";
}


const listnew = document.querySelectorAll(".points-list3 li");
if (currentSlide+1 === 57) {
  listnew.forEach((list, index) => {
    list.style.animationDelay = `${index * 0.2}s`; 
    list.classList.add("animate-listili");
  });
} else {
  listnew.forEach(list => {
    list.classList.remove("animate-listili");
    list.style.animationDelay = "0s"; 
  });
}


const left58 = document.querySelector(".text58");
const right58 = document.querySelector(".img58");
if (currentSlide + 1 === 58) {
  left58.classList.add("animate-part-one");
  right58.classList.add("animate-part-two");
} else {
  left58.classList.remove("animate-part-one");
  right58.classList.remove("animate-part-two");
}


const videocontainer55 = document.querySelector(".video-container55");

if (currentSlide + 1 === 59) {
  videocontainer55.classList.add("animate-leakage");
} else {
  videocontainer55.classList.remove("animate-leakage");
}


const g11 = document.querySelector(".grandnew1 > div:nth-child(1)");
const g12 = document.querySelector(".grandnew1 > div:nth-child(2)");

if (currentSlide + 1 === 61) {
  g11.classList.add("animate-part-one");
  g12.classList.add("animate-part-two");
} else {
  g11.classList.remove("animate-part-one");
  g12.classList.remove("animate-part-two");
}

const g21 = document.querySelector(".grandnew2 > div:nth-child(1)");
const g22 = document.querySelector(".grandnew2 > div:nth-child(2)");

if (currentSlide + 1 === 62) {
  g21.classList.add("animate-part-two");
  g22.classList.add("animate-part-one");
} else {
  g21.classList.remove("animate-part-two");
  g22.classList.remove("animate-part-one");
}
const g31 = document.querySelector(".grandnew3 > div:nth-child(1)");
const g32 = document.querySelector(".grandnew3 > div:nth-child(2)");

if (currentSlide + 1 === 63) {
  g31.classList.add("animate-part-one");
  g32.classList.add("animate-part-two");
} else {
  g31.classList.remove("animate-part-one");
  g32.classList.remove("animate-part-two");
}
const g41 = document.querySelector(".grandnew4 > div:nth-child(1)");
const g42 = document.querySelector(".grandnew4 > div:nth-child(2)");

if (currentSlide + 1 === 64) {
  g41.classList.add("animate-part-two");
  g42.classList.add("animate-part-one");
} else {
  g41.classList.remove("animate-part-two");
  g42.classList.remove("animate-part-one");
}
const g51 = document.querySelector(".grandnew5 > div:nth-child(1)");
const g52 = document.querySelector(".grandnew5 > div:nth-child(2)");

if (currentSlide + 1 === 65) {
  g51.classList.add("animate-part-one");
  g52.classList.add("animate-part-two");
} else {
  g51.classList.remove("animate-part-one");
  g52.classList.remove("animate-part-two");
}




if (currentSlide+1 === 66) {
  const imgsw = document.querySelectorAll(".newrow img");
  imgsw.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("animate-img");
    }, index * 400); 
  });
} else {
  const imgsw = document.querySelectorAll(".newrow img");
  imgsw.forEach(img => {
    img.classList.remove("animate-img");
  });
}

if (currentSlide+1 === 67) {
  const imgsw = document.querySelectorAll(".newrow1 img");
  imgsw.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("animate-img");
    }, index * 400); 
  });
} else {
  const imgsw = document.querySelectorAll(".newrow1 img");
  imgsw.forEach(img => {
    img.classList.remove("animate-img");
  });
}


const page68 = document.querySelectorAll(".page68 li");
if (currentSlide+1 === 68) {
  page68.forEach((list, index) => {
    list.style.animationDelay = `${index * 0.2}s`; 
    list.classList.add("animate-listili");
  });
} else {
  page68.forEach(list => {
    list.classList.remove("animate-listili");
    list.style.animationDelay = "0s"; 
  });
}


 const bgAudio = document.getElementById('bg-audio');
 const machineVideo = document.getElementById('autoPlayVideo');

if (currentSlide + 1 === 38) {
  setTimeout(() => {
    machineVideo.currentTime = 0;
    machineVideo.muted = false;
    machineVideo.play();
    bgAudio.pause();
  }, 2000); // 1-second delay
} else {
  setTimeout(() => {
    machineVideo.pause();
    machineVideo.muted = true;
    bgAudio.play();
  }, 2000); // 1-second delay
}


}

function playAudioForPage(pageNumber) {
  const audio = document.getElementById('slide-audio');
  audio.onended = null;
  audio.pause();

  if (pageNumber === 1) {
    const files = [
      `./audio/Audio files/audio1.1.mp3`,
      `./audio/Audio files/audio1.2.mp3`,
      `./audio/Audio files/audio1.3.mp3`
    ];
    let currentIndex = 0;

    function playNext() {
      if (currentIndex >= files.length) return;

      audio.src = files[currentIndex];
      audio.currentTime = 0;
      audio.play();

      currentIndex++;
      audio.onended = () => {
        setTimeout(playNext, 2100);
      };
    }

    setTimeout(() => {
      startTitleAnimation(); 
      playNext();
    }, 300);
  } else {
    clearInterval(titleInterval);
    audio.src = `./audio/Audio files/audio${pageNumber}.mp3`;
    audio.currentTime = 0;
    audio.play();
  }
}


function toplayaudio(index){
  const founderVideo = document.getElementById('founder-video');
  const bgAudio = document.getElementById('bg-audio');
  if(index===3  && currentSlide+1===3){
    founderVideo.muted = false;
    founderVideo.currentTime = 0;
    founderVideo.play();
  
  bgAudio.pause();
  }else{
    founderVideo.muted = true;
    founderVideo.currentTime = 0;
    founderVideo.pause();
    bgAudio.play();
  }
}


// function speakText() {
//   const text = document.getElementById("textToRead").textContent;

//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.lang = 'en-US'; // Set the language
//   utterance.pitch = 1;      // 0 - 2
//   utterance.rate = 1;       // 0.1 - 10
//   utterance.volume = 1;     // 0 - 1

//   // Speak it
//   window.speechSynthesis.speak(utterance);
// }

function MappageAnimations() {
  console.log("startThirdPageAnmations8 triggered");

  const rightSectionImages = document.querySelectorAll('.right-section img, .centered-image7 img,.centered-image66 img, .left-img img');
  const leftSections = document.querySelectorAll('.left-section1, .left-section2, .left-sections');
  const titleText = document.querySelectorAll('.heading-container');
  const multipleAddress = document.querySelectorAll('.right-sections div');
  leftSections.forEach((leftSection) => {
    const leftHeading = leftSection.querySelectorAll('h2');
    const listItems = leftSection.querySelectorAll('.about-points li');
    const logoImages = leftSection.querySelectorAll('.about-image ');
    const addressContainers = leftSection.querySelectorAll('.address-container');

    leftHeading.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('fade-in-up');
      }, 200);
    });

    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('fade-in-up');
      }, 200 + index * 200);
    });


    logoImages.forEach((img) => {
      setTimeout(() => {
        img.classList.add('fade-in-up');
      }, 200 + listItems.length * 200 + 100);
    });

    addressContainers.forEach((addr) => {
      setTimeout(() => {
        addr.classList.add('fade-in-up');
      }, 200 + listItems.length * 200 + 200);
    });
  });

  rightSectionImages.forEach((item) => {
    setTimeout(() => {
      item.classList.add('fade-in-right');
    }, 300);
  });
  
  multipleAddress.forEach((item,index) => {
    setTimeout(() => {
      item.classList.add('fade-in-up');
    },index* 300);
  });
  titleText.forEach((item) => {
    setTimeout(() => {
      item.classList.add('fade-in-right');
    }, 300);
  });

  MappageAnimationsremove();
}



function MappageAnimationsremove() {
  const rightSectionImages = document.querySelectorAll('.right-section img, .centered-image7 img, .centered-image66 img, .left-img img');
  const leftSections = document.querySelectorAll('.left-section1, .left-section2, .left-sections');
  const titleText = document.querySelectorAll('.heading-container');
  const multipleAddress = document.querySelectorAll('.right-sections div');
  rightSectionImages.forEach((item) => {
    item.classList.remove('fade-in-right');
  });
  titleText.forEach((item) => {
    item.classList.remove('fade-in-right');
  });
  multipleAddress.forEach((item) => {
      item.classList.remove('fade-in-up');
  });

  leftSections.forEach((leftSection) => {
    const leftHeading = leftSection.querySelectorAll('h2');
    const listItems = leftSection.querySelectorAll('.about-points li');
    const logoImages = leftSection.querySelectorAll('.about-image ');
    const addressContainers = leftSection.querySelectorAll('.address-container');

    leftHeading.forEach((item) => {
      item.classList.remove('fade-in-up');
    });

    listItems.forEach((item) => {
      item.classList.remove('fade-in-up');
    });

    logoImages.forEach((img) => {
      img.classList.remove('fade-in-up');
    });

    addressContainers.forEach((addr) => {
      addr.classList.remove('fade-in-up');
    });
  });
}

function LogoAnimations(){
  const logos = document.querySelectorAll('.company-gallery .company-item,.company-gallery1 .company-item, .company-gallery2 .company-item, .company-gallery3 .company-item, .company-gallery4 .company-item');

  logos.forEach((logo, index) => {
    setTimeout(() => {
      logo.classList.add('animate-right');
    },300); 
  });
    RemoveLogoAnimations();
}

function RemoveLogoAnimations(){
  const logos = document.querySelectorAll('.company-gallery .company-item,.company-gallery1 .company-item, .company-gallery2 .company-item, .company-gallery3 .company-item, .company-gallery4 .company-item');
  logos.forEach((logo) => {
      logo.classList.remove('animate-right');  
  });
}

function triggerPneumaticAnimations() {
  const leftSection = document.querySelector('.pneumatic-left');
  const rightImg = document.querySelector('.pneumatic-right img');
  const bulletPoints = document.querySelectorAll('.pneumatic-left ul li');

  if (leftSection) leftSection.classList.add('animate-left');
  if (rightImg) rightImg.classList.add('animate-up');

  bulletPoints.forEach((li, index) => {
    setTimeout(() => {
      li.classList.add('animated');
    }, index * 200); 
  });
}

function removetriggerPneumaticAnimations() {
  const leftSection = document.querySelector('.pneumatic-left');
  const rightImg = document.querySelector('.pneumatic-right img');
  const bulletPoints = document.querySelectorAll('.pneumatic-left ul li');

  if (leftSection) leftSection.classList.remove('animate-left');
  if (rightImg) rightImg.classList.remove('animate-up');

  bulletPoints.forEach((li) => {
      li.classList.remove('animated');
  });
}

function triggerClassificationFadeIn() {
  const section = document.querySelector('.classification-section');
  if (section) section.classList.add('fade-in');
}

function removeClassificationFadeIn() {
  const section = document.querySelector('.classification-section');
  if (section) section.classList.remove('fade-in');
}

function addPressureAnimation() {
  const containers = document.querySelector('.pressureConveyContainer');
 
    containers.classList.add('slide-in-right');
    containers.style.opacity = '1'; 
  
}

function removePressureAnimation() {
  const containers = document.querySelector('.pressureConveyContainer');
 
    containers.classList.remove('slide-in-right');
    containers.style.opacity = '0'; 
  
}
function addPressureAnimation1() {
  const containers = document.querySelector('.pressureConveyContainer1');
 
    containers.classList.add('slide-in-right');
    containers.style.opacity = '1'; 

}

function removePressureAnimation1() {
  const containers = document.querySelector('.pressureConveyContainer1');
    containers.classList.remove('slide-in-right');
    containers.style.opacity = '0'; 
}


function addRotaryValveAnimation() {
  const header = document.querySelector('.anima33');
  const row = document.querySelector('.row');

  if (header) {
    header.classList.remove('animate-from-left'); 
    void header.offsetWidth;
    header.classList.add('animate-from-right');
  }

  if (row) {
    row.classList.remove('animate-from-right');
    void row.offsetWidth;
    row.classList.add('animate-from-left');
  }
}

function removeRotaryValveAnimation() {
  const header = document.querySelector('.anima33');
  const row = document.querySelector('.row');

  if (header) header.classList.remove('animate-from-right');
  if (row) row.classList.remove('animate-from-left');

  if (header) header.style.opacity = 0;
  if (row) row.style.opacity = 0;
}


function animateBasicConstruction() {
  const sections = [
    document.querySelector(' .left-section'),
    document.querySelector(' .center-section'),
    document.querySelector(' .center-section1'),
    document.querySelector(' .rightani')
  ];

  sections.forEach((section, index) => {
    if (section) {
      section.classList.remove('section-animate'); 
      void section.offsetWidth; 
      section.classList.add('section-animate', `section-delay-${index + 1}`);
    }
  });
}

function resetBasicConstructionAnimation() {
  const sections = document.querySelectorAll(' .basic-construction > div');
  sections.forEach(section => {
    section.classList.remove('section-animate', 'section-delay-1', 'section-delay-2', 'section-delay-3', 'section-delay-4');
    section.style.opacity = 0;
  });
}


function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    if (currentSlide == 1) {
        let images = document.querySelectorAll(".right_left img, .right_right img");

    setTimeout(() => {
        images.forEach((img) => {
            img.classList.add("animate");
        });
    }, 100);

  const heading1 = document.querySelector(".leftheading1");
  const heading2 = document.querySelector(".leftheading2");

  heading1.style.animation = "typing 3s steps(150) 1 normal forwards, blink 1s step-end infinite";

  setTimeout(() => {
    heading2.style.visibility = "visible";
    heading2.style.animation = "typing 3s steps(150) 1 normal forwards, blink 1s step-end infinite";
  }, 2700);
   
}

  

    $(".nav-links a").css("color", "black");
if(currentSlide >= 0 && currentSlide <=2){
    $('.homeIntent').css("color", "red");
}else if(currentSlide>=3 && currentSlide<=13){
    $('.groupOfCopmaniesIntent').css("color", "red");
    
}else if(currentSlide>=25 && currentSlide<=30){
    $('.pneumaticIntent').css("color", "red");
}else if(currentSlide>=31 && currentSlide<=68){
    $('.productIntent').css("color", "red");
}

    updatePageNumber();
}

document.getElementById('nextButton').addEventListener('click', () => {
    console.log(totalSlides)
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    
    updateSlider();
    
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlider();
   
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        document.getElementById('nextButton').click();
    } else if (event.key === 'ArrowLeft') {
        document.getElementById('prevButton').click();
    }
});

pageInput.addEventListener('input', () => {
    let pageNumber = parseInt(pageInput.value, 10);

    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalSlides) {
        currentSlide = pageNumber - 1;
        updateSlider();
    } else {
        pageInput.value = currentSlide + 1;
    }
});


const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',   
  loop: false,               
  slidesPerView: 1,         
  spaceBetween: 0,                  
  mousewheel: true,         
  autoplay: {
      delay: 2000,          
      disableOnInteraction: false, 
      pauseOnMouseEnter: true,     
  },
  pagination: {
      el: '.swiper-pagination',   
      clickable: true,             
  },
  slideToClickedSlide: true,   
  watchOverflow: true,           
  preloadImages: false,        
  speed: 1000,
  on: {
      init: function () {
        const input = document.getElementById('slide-pno3');
        updateSlideNumber(this.activeIndex, this.slides.length,input); // Set initial number
      },
      slideChange: function () {
        const input = document.getElementById('slide-pno3');
        updateSlideNumber(this.activeIndex, this.slides.length,input); 
        toplayaudio(this.activeIndex);
      },
    }         
});

const swipers = new Swiper('.swiper-container1', {
  direction: 'vertical',   
  loop: false,               
  slidesPerView: 1,         
  spaceBetween: 0,                  
  mousewheel: true,         
  autoplay: {
      delay: 2000,          
      disableOnInteraction: false, 
      pauseOnMouseEnter: true,     
  },
  pagination: {
      el: '.swiper-pagination',   
      clickable: true,             
  },
  slideToClickedSlide: true,   
  watchOverflow: true,           
  preloadImages: false,        
  speed: 1000,     
  on: {
      init: function () {
        const input = document.getElementById('slide-pno4');
        updateSlideNumber(this.activeIndex, this.slides.length,input); // Set initial number
      },
      slideChange: function () {
        const input = document.getElementById('slide-pno4');
        updateSlideNumber(this.activeIndex, this.slides.length,input); // Update on change
      },
    }                  
});


const swiper1 = new Swiper('.venting-swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }
});

const swiper3 = new Swiper('.venting-swiper2', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }, on: {
      init: function () {
        const input = document.getElementById('slide-pno5');
        updateSlideNumber(this.activeIndex, this.slides.length,input); // Set initial number
      },
      slideChange: function () {
        const input = document.getElementById('slide-pno5');
        updateSlideNumber(this.activeIndex, this.slides.length,input); // Update on change
      },
    } 
  
});

const swiper4 = new Swiper('.venting-swiper3', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },on: {
      init: function () {
        const input = document.getElementById('slide-pno8');
        updateSlideNumber(this.activeIndex, this.slides.length,input); // Set initial number
      },
      slideChange: function () {
        const input = document.getElementById('slide-pno8');
        updateSlideNumber(this.activeIndex, this.slides.length,input); // Update on change
      },
    } 
});

const swiper5 = new Swiper('.venting-swiper4', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  on: {
    init: function () {
      
      const input = document.getElementById('slide-pno1');
      updateSlideNumber(this.activeIndex, this.slides.length,input);
    },
    slideChange: function () {
      const input = document.getElementById('slide-pno1');
      updateSlideNumber(this.activeIndex, this.slides.length,input);
    }
  }
});

function updateSlideNumber(currentIndex, totalSlides,input) {
  
  if (input) {
    input.textContent = `${currentIndex + 1}/${totalSlides}`;
  }
}

const swiper6 = new Swiper('.page55-swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1500,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },on: {
      init: function () {
        const input = document.getElementById('slide-pno7');
        updateSlideNumber(this.activeIndex, this.slides.length,input); // Set initial number
      },
      slideChange: function () {
        const input = document.getElementById('slide-pno7');
        updateSlideNumber(this.activeIndex, this.slides.length,input); // Update on change
      },
    },
});
  
  const swiper7 = new Swiper('.swiper-container7', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      on: {
        init: function () {
          const input = document.getElementById('slide-pno6');
          updateSlideNumber(this.activeIndex, this.slides.length,input); // Set initial number
        },
        slideChange: function () {
          const input = document.getElementById('slide-pno6');
          updateSlideNumber(this.activeIndex, this.slides.length,input); // Update on change
        },
      } 
  });
 


  

  // const swiper2 = new Swiper('.venting-swiper1', {
  //   direction: 'vertical',
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   speed: 1500,
  //   mousewheel: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: false,
  //     pauseOnMouseEnter: true,
  //   },
  //   on: {
  //     init: function () {
  //       loadCurrentGif(this);
  //       const input = document.getElementById('slide-pno2');
  //       updateSlideNumber(this.activeIndex, this.slides.length,input); // Set initial number
  //     },
  //     slideChange: function () {
  //       loadCurrentGif(this);
  //       const input = document.getElementById('slide-pno2');
  //       updateSlideNumber(this.activeIndex, this.slides.length,input); // Update on change
  //     },
  //   },
  // });
  
  const swiper8 = new Swiper('.venting-swiper5', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    mousewheel: true,
    pagination: {
      el: '.swiper35',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },on: {
        init: function () {
          const input = document.getElementById('slide-pno9');
          updateSlideNumber(this.activeIndex, this.slides.length,input); // Set initial number
        },
        slideChange: function () {
          const input = document.getElementById('slide-pno9');
          updateSlideNumber(this.activeIndex, this.slides.length,input); // Update on change
        },
      } 
  });
  
  
  function loadCurrentGif(swiper) {
    swiper.slides.forEach((slide, index) => {
      const img = slide.querySelector('img');
      if (!img) return;
  
      if (index === swiper.activeIndex) {
        const gifSrc = img.dataset.src;
        img.src = ''; 
        img.src = gifSrc + '?t=' + new Date().getTime(); 
      } 
    });
  }
  
        


const homeIntentButton = document.querySelectorAll('.homeIntent');
const groupOfCopmaniesIntentButton = document.querySelectorAll('.groupOfCopmaniesIntent');
const pneumaticIntentButton = document.querySelectorAll('.pneumaticIntent');
const productIntentButton = document.querySelectorAll('.productIntent');

homeIntentButton.forEach(button => {
    button.addEventListener("click", function() {
        pageInput.value = 1;
        triggerPageChange();
    });
})

groupOfCopmaniesIntentButton.forEach(button => {
    button.addEventListener("click", function() {
        pageInput.value = 4;
        triggerPageChange();
    });
})

pneumaticIntentButton.forEach(button => {
    button.addEventListener("click", function() {
        pageInput.value = 26;
        triggerPageChange();
    });
})

productIntentButton.forEach(button => {
    button.addEventListener("click", function() {
        pageInput.value = 32;
        triggerPageChange();
    });
})

function triggerPageChange() {
    pageInput.dispatchEvent(new Event('input'));
}



let titleInterval;
let index = 0;

const titleElement = document.getElementById('firstAnimationText');
const texts = [
  "Skill <br>Development <br>Guide",
  "Knowledge <br>empowers <br>your journey",
  "Solution Provider <br> for bulk solids <br> handling"
];

function startTitleAnimation() {
  clearInterval(titleInterval);
  index = 0;
  showTitleWithAnimation(index);

  titleInterval = setInterval(() => {
    index = (index + 1) % texts.length;
    showTitleWithAnimation(index);
  }, 4200);
}

function showTitleWithAnimation(i) {
  titleElement.innerHTML = texts[i];
  titleElement.style.animation = 'none'; 
  void titleElement.offsetWidth; 
  titleElement.style.animation = 'titleAnimation 4.2s ease-out';
}



function startThirdPageAnmation() {
    swiper.slideTo(0);  
    swiper.autoplay.start(); 
}

function startThirdPageAnmations() {
    swipers.slideTo(0);  
    swipers.autoplay.start(); 
}
function startThirdPageAnmations1() {
    swiper1.slideTo(0);  
    swiper1.autoplay.start(); 
}
function startThirdPageAnmations2() {
    swiper2.slideTo(0);  
    swiper2.autoplay.start(); 
} 

function startThirdPageAnmations3() {
    swiper5.slideTo(0);  
    swiper5.autoplay.start(); 
}
function startThirdPageAnmations4() {
    swiper3.slideTo(0);  
    swiper3.autoplay.start(); 
}

function startThirdPageAnmations5() {
  swiper4.slideTo(0);  
  swiper4.autoplay.start(); 
}

function startThirdPageAnmations6() {
  swiper6.slideTo(0);  
  swiper6.autoplay.start(); 
}
function startThirdPageAnmations7() {
  swiper7.slideTo(0);  
  swiper7.autoplay.start(); 
}

function startThirdPageAnmations10() {
  swiper10.slideTo(0);  
  swiper10.autoplay.start(); 
}

function startThirdPageAnmations11() {
  swiper11.slideTo(0);  
  swiper11.autoplay.start(); 
}

function startThirdPageAnmations44() {
  swiper44.slideTo(0);  
  swiper44.autoplay.start(); 
}

function startThirdPageAnmations51() {
  swiper51.slideTo(0);  
  swiper51.autoplay.start(); 
}

function startThirdPageAnmations56() {
  swiper56.slideTo(0);  
  swiper56.autoplay.start(); 
}

// document.querySelectorAll('img').forEach(img => {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = 1;
//       }
//     });
//   }, {
//     threshold: 0 
//   });

//   observer.observe(img);
// });




let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

// Declare the unAcceptClick variable
let unAcceppClick;


window.addEventListener('load', () => {
  const headings = document.querySelectorAll('h1');
  headings.forEach(heading => {
      // Ensure the typing effect starts over on page load
      heading.style.animation = 'none'; // Reset the animation
      heading.offsetHeight; // Trigger a reflow (important to reset animation)
      heading.style.animation = ''; // Start the animation again
  });
});

// Optional: If you're using a carousel/slide and need to reset on slide change:
function resetTypingAnimation() {
  const headings = document.querySelectorAll('h1');
  headings.forEach(heading => {
      heading.style.animation = 'none'; // Reset the animation
      heading.offsetHeight; // Trigger reflow to reset the animation
      heading.style.animation = ''; // Restart animation
  });
}



// page 4 text animtaion

window.addEventListener('load', () => {
  const headings = document.querySelectorAll('h1');
  headings.forEach(heading => {
      // Ensure the typing effect starts over on page load
      heading.style.animation = 'none'; // Reset the animation
      heading.offsetHeight; // Trigger a reflow (important to reset animation)
      heading.style.animation = ''; // Start the animation again
  });
});


function resetTypingAnimation() {
  const headings = document.querySelectorAll('h1');
  headings.forEach(heading => {
      heading.style.animation = 'none';
      heading.offsetHeight;
      heading.style.animation = ''; 
  });
}



//  page 16 new 


document.addEventListener("DOMContentLoaded", () => {

  playAudioForPage(1);
  document.querySelector(".left-section1").classList.add("animate-fade-in");

    window.addEventListener("DOMContentLoaded", function () {
        const audio = document.getElementById("bg-audio");
        audio.volume = 0.1; // Set mild volume
        audio.play().catch(e => {
     
          document.addEventListener("click", () => {
            audio.play();
          }, { once: true });
        });
      });
    $('.homeIntent').css("color", "red");
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            $(".nav-links a").css("color", "black");
            if (this.classList.contains("homeIntent")) {
                $('.homeIntent').css("color", "red");
            }else if (this.classList.contains("groupOfCopmaniesIntent")) {
                $('.groupOfCopmaniesIntent').css("color", "red");
            }else if (this.classList.contains("pneumaticIntent")) {
                $('.pneumaticIntent').css("color", "red");
            }else if (this.classList.contains("productIntent")) {
                $('.productIntent').css("color", "red");
            }
        });
    });
    
  const carousels = document.querySelectorAll(".circle-carousel");

  carousels.forEach((carousel) => {

      const cards = carousel.querySelectorAll(".circle-carousel-card");
      const active = carousel.querySelector(".circle-carousel-card.active");
      const previous = carousel.querySelector(".circle-carousel-controls.previous");
      const next = carousel.querySelector(".circle-carousel-controls.next");
      var index = 0;

      if (cards.length > 0 && previous && next) {

          const forcedFormat = carousel.classList.contains("force-format-to-1by1");

          const set_left = () => {
              if (index == 0) {
                  cards[cards.length - 1].classList.add("left");
              } else {
                  cards[index - 1].classList.add("left");
              }
          }

          const set_right = () => {
              if (index == cards.length - 1) {
                  cards[0].classList.add("right");
              } else {
                  cards[index + 1].classList.add("right");
              }
          }

          const remove_animations = () => {
              cards.forEach((card) => {
                  card.classList.remove("to-front-right");
                  card.classList.remove("to-back-right");
                  card.classList.remove("to-front-left");
                  card.classList.remove("to-back-left");
              })
          }

          const set_active = (direction = null, outdatedIndex = null) => {
              if (cards.length > 2 && !forcedFormat) {
                  cards[index].classList.add("active");
              } else if (cards.length == 2 || forcedFormat) {
                  if (direction === "previous") {
                      remove_animations();
                      cards[index].classList.add("to-front-left");
                      cards[outdatedIndex].classList.add("to-back-right");
                  } else if (direction === "next") {
                      remove_animations();
                      cards[index].classList.add("to-front-right");
                      cards[outdatedIndex].classList.add("to-back-left");
                  } else {
                      remove_animations();
                      cards[index].classList.add("to-front-right");
                  }
              }
          }

          const handleAction = (action = "next") => {
              const outdatedIndex = index;

              if (action === "previous") {
                  if (index === 0) {
                      index = cards.length - 1;
                  } else {
                      index--;
                  }
              } else if (action === "next") {
                  if (index === cards.length - 1) {
                      index = 0;
                  } else {
                      index++;
                  }
              }

              if (cards.length > 2 && !forcedFormat) {
                  carousel.querySelector(".active").classList.remove("active")
                  set_active();
                  carousel.querySelector(".right").classList.remove("right")
                  carousel.querySelector(".left").classList.remove("left")
                  set_left();
                  set_right();
              } else if (cards.length === 2 || forcedFormat) {
                  set_active(action, outdatedIndex);
              }
          }

          // Initialisation
          if (active) {
              index = Array.prototype.indexOf.call(cards, active);
          } else {
              set_active();
          }

          if (cards.length > 2 && !forcedFormat) {
              if (!carousel.querySelector(".left")) {
                  set_left();
              }
              if (!carousel.querySelector(".right")) {
                  set_right();
              }
              cards.forEach((card) => {
                  card.classList.add("transition")
              })
          }

          previous.addEventListener("click", () => {
              handleAction("previous");
          })
          next.addEventListener("click", () => {
              handleAction("next");
          })

          setInterval(() => {
              handleAction("next");
          }, 3000); 

      }
  })

})


const btn1 = document.getElementById('btn1'); 
const btn2 = document.getElementById('btn2'); 
const btn3 = document.getElementById('btn3'); 
const btn4 = document.getElementById('btn4'); 
const btn5 = document.getElementById('btn5'); 
const Img1 = document.getElementById('Img1');
const Img2 = document.getElementById('Img2');
const Img3 = document.getElementById('Img3');
const Img4 = document.getElementById('Img4');
const Img5 = document.getElementById('Img5');


btn1.addEventListener('click', () => {
  Img1.style.display = 'flex';
  Img2.style.display = 'none';
  Img3.style.display = 'none';
  Img4.style.display = 'none';
  Img5.style.display = 'none';
});

btn2.addEventListener('click', () => {
  Img1.style.display = 'none';
  Img2.style.display = 'flex';
  Img3.style.display = 'none';
  Img4.style.display = 'none';
  Img5.style.display = 'none';
});

btn3.addEventListener('click', () => {
  Img1.style.display = 'none';
  Img2.style.display = 'none';
  Img3.style.display = 'flex';
  Img4.style.display = 'none';
  Img5.style.display = 'none';
});
btn4.addEventListener('click', () => {
  Img1.style.display = 'none';
  Img2.style.display = 'none';
  Img3.style.display = 'none';
  Img4.style.display = 'flex';
  Img5.style.display = 'none';
});
btn5.addEventListener('click', () => {
  Img1.style.display = 'none';
  Img2.style.display = 'none';
  Img3.style.display = 'none';
  Img4.style.display = 'none';
  Img5.style.display = 'flex';
});

// video playing 

// Create an Intersection Observer to detect when the page24 section is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const video = document.getElementById('autoPlayVideo');
        if (entry.isIntersecting && video) {
            video.addEventListener('mouseenter', () => {
                video.pause();  // Pause the video on hover
              });

              video.addEventListener('mouseleave', () => {
                video.play();  // Play the video when hover is released
              });
            // Play the video when the section is in view
            video.play();
        } else {
            // Pause the video if it's out of view (optional)
            video.pause();
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the section is in view
});

const videoElements = document.querySelectorAll('.videoHover');

// Add event listeners to each video element
videoElements.forEach(video => {
    video.addEventListener('mousemove', (e) => {
        // Get the position of the mouse relative to the video
        const videoWidth = video.offsetWidth;
        const mouseX = e.offsetX;

        // Check if the mouse is within the last 20% of the video's width
        if (mouseX >= videoWidth * 0.2 && mouseX <= videoWidth * 0.75) {
          // If mouse is within the last 20% of the video, pause it
          if (!video.paused) {
            video.pause();
          }
        } else {
          // If mouse is outside the last 20%, play the video
          if (video.paused) {
            video.play();
          }
        }
      });

      // Ensure the video starts playing when the mouse leaves
      video.addEventListener('mouseleave', () => {
        if (video.paused) {
          video.play();  // Play the video when the mouse leaves the video area
        }
      });
});

// Target the section with id "page24"
const section = document.getElementById('page24');
observer.observe(section);

const objectContainer = document.getElementById('objectContainer');

// Add an event listener for when the object is loaded
objectContainer.addEventListener('load', function() {
  // Access the document inside the <object>
  const objectDoc = objectContainer.contentDocument || objectContainer.contentWindow.document;
  
  // Now, we can safely query the elements inside page4.html
  const cardButtonNavigation = objectDoc.querySelectorAll('.page5-content p');

  cardButtonNavigation.forEach(button => {
    button.addEventListener("click", function() {
      console.log("button clicked");
      const pgNo = button.getAttribute("pageNo");
      pageInput.value = pgNo; // Assuming 'pageInput' is already defined
      triggerPageChange(); // Assuming 'triggerPageChange' is already defined
    });
  });
});

const productData = {
    "1-Airlock": 
    `<p class="popupHeader">Airlock India</p>
    <ul>
        <li>1. Rotary Valves</li>
        <li>2. Diverter Valves</li>
        <li>3. Relief Valves</li>
        <li>4. Bin Activator</li>
        <li>5. Pneumatic Impactor</li>
    </ul>
    `,
    "1-PA":  `<p class="popupHeader">P&A Conveyors</p>
    <ul>
        <li>1. Screw Conveyors</li>
        <li>2. Volumetric Feeders</li>
        <li>3. Powder Samplers</li>
        <li>4. Bag Dump Station</li>
        <li>5. Bulk Bag Loader </li>
        <li>6. Bulk Bag Unloader</li>
        <li>7. Lump Breaker </li>
        <li>8. Magnetic Separator</li>
    </ul>
    `,
    "1-BFM":  `<p class="popupHeader">BFM Fittings </p>
    <ul>
        <li>1. Flexible Connectors</li>
    </ul>
    `,
    "1-Solimar":  `<p class="popupHeader">Solimar  </p>
    <ul>
        <li>1. Silo Fluidizers and Knockers</li>
    </ul>
    `,
    "1-Eclipse Magnetics":  `<p class="popupHeader">Eclipse Magnetics  </p>
    <ul>
        <li>1. Magnetic Separators and Metal Detectors</li>
    </ul>
    `,
    "1-Morris":  `<p class="popupHeader">Morris  </p>
    <ul>
        <li>1. Couplings, Bends and Pipes</li>
    </ul>
    `,
    "1-Sterivalves":  `<p class="popupHeader">Sterivalves  </p>
    <ul>
        <li>1. Sanitary Butterfly Valves</li>
    </ul>
    `,
    "1-Cipriani Harrison":  `<p class="popupHeader">Cipriani Harrison</p>
    <ul>
        <li>1. Butterfly Valves</li>
    </ul>
    `,
    "1-Delval":  `<p class="popupHeader">Delval  </p>
    <ul>
        <li>1. Butterfly Valves</li>
    </ul>
    `,
    "1-Keofitt":  `<p class="popupHeader">Keofitt</p>
    <ul>
        <li>1. Aseptic Samplers</li>
    </ul>
    `,
    "1-Ingersoll Rand":  `<p class="popupHeader">Ingersoll Rand  </p>
    <ul>
        <li>1. Roots Blowers and Packages</li>
    </ul>
    `,
    "1-Jacob":  `<p class="popupHeader">Jacob Components</p>
    <ul>
        <li>1. Modular Pipework Systems</li>
    </ul>
    `,
    
    // Add data for other companies here
  };

  // Get all logo elements
  const logos = document.querySelectorAll('.logo-img-product');

  // Get the popup elements
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const popupHeader = document.getElementById('popupHeader');
  const popupProducts = document.getElementById('popupProducts');
  const closePopup = document.getElementById('closePopup');

  // Function to open the popup and show products
  function openPopup(company) {
    // Set popup content
    popupHeader.textContent = company;
    popupProducts.innerHTML = '';  // Clear previous products

    // Get products for the clicked company
    const products = productData[company];

    if (products) {
        popupProducts.innerHTML = products;
    } else {
      popupProducts.innerHTML = "<li>No products available.</li>";
    }

    // Show the popup and overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }

  // Add event listeners to each logo
  logos.forEach(logo => {
    logo.addEventListener('click', () => {
      const company = logo.getAttribute('data-company');
      openPopup(company);
    });
  });

  // Close the popup when the "X" button is clicked
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  });

  // Close the popup when the overlay is clicked
  overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  });




// $(".custom-carousel").owlCarousel({
//     autoWidth: true,
//     loop: true
//   });
//   $(document).ready(function () {
//     $(".custom-carousel .item").click(function () {
//       $(".custom-carousel .item").not($(this)).removeClass("active");
//       $(this).toggleClass("active");
//     });
//   });

// var glide = new Glide('#options-hoverpause', {
//     type: 'carousel',
//       hoverpause: true,
//       autoplay: 1500,
//       perView: 5,
//       gap: 70,
//       focusAt: "center",
//       startAt: 1,
//       bound: true,
//       breakpoints: {
//         // For screens 1500px or smaller, set perView to 3
//         1520: {
//             perView: 4,
//             gap: 0,
//         },
//         1200: {
//             perView: 3,
//             gap: 50,
//         },
//         // Optional: you can add more breakpoints for smaller devices if needed
//         768: {
//             perView: 3 // For screens 768px or smaller, show 2 slides
//         },
//         480: {
//             perView: 1 // For screens 480px or smaller, show 1 slide
//         }
//     }
//     })
    
//     glide.mount()
    
// var glide2 = new Glide('#options-hoverpause2', {
//     type: 'carousel',
//       hoverpause: true,
//       autoplay: 1500,
//       perView: 5,
//       gap: 70,
//       focusAt: "center",
//       startAt: 1,
//       bound: true,
//       breakpoints: {
//         // For screens 1500px or smaller, set perView to 3
//         1520: {
//             perView: 4,
//             gap: 0,
//         },
//         1200: {
//             perView: 3,
//             gap: 50,
//         },
//         // Optional: you can add more breakpoints for smaller devices if needed
//         768: {
//             perView: 3 // For screens 768px or smaller, show 2 slides
//         },
//         480: {
//             perView: 1 // For screens 480px or smaller, show 1 slide
//         }
//     }
//     })
    
//     glide2.mount()
    

// var glide3 = new Glide('#options-hoverpause3', {
//     type: 'carousel',
//       hoverpause: true,
//       autoplay: 1500,
//       perView: 5,
//       gap: 70,
//       focusAt: "center",
//       startAt: 1,
//       bound: true,
//       breakpoints: {
//         // For screens 1500px or smaller, set perView to 3
//         1520: {
//             perView: 4,
//             gap: 0,
//         },
//         1200: {
//             perView: 3,
//             gap: 50,
//         },
//         // Optional: you can add more breakpoints for smaller devices if needed
//         768: {
//             perView: 3 // For screens 768px or smaller, show 2 slides
//         },
//         480: {
//             perView: 1 // For screens 480px or smaller, show 1 slide
//         }
//     }
//     })
    
//     glide3.mount()
    
    // Select all cards
    // const cards = document.querySelectorAll('.glide-card');
    
    // // Loop through each card and add event listeners
    // cards.forEach(card => {
    //     card.addEventListener('mousedown', () => {
    //         // When the card is grabbed, change the cursor to grabbing
    //         card.style.cursor = 'grabbing';
    //     });
    
    //     // Reset cursor when mouse is released
    //     card.addEventListener('mouseup', () => {
    //         // When the mouse is released, change the cursor back to normal
    //         card.style.cursor = 'grab';
    //     });
    
    //     // Optionally, if you want to ensure that the cursor is reset even if mouse leaves the card
    //     card.addEventListener('mouseleave', () => {
    //         card.style.cursor = 'grab';
    //     });
    // });
    


    


    const swiper10 = new Swiper('.venting-swiper4new', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1500,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      on: {
        init: function () {
          const input = document.getElementById('slide-pno10new');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        },
        slideChange: function () {
          const input = document.getElementById('slide-pno10new');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        }
      }
    });
    
    function updateSlideNumber(currentIndex, totalSlides, input) {
      if (input) {
        input.textContent = `${currentIndex + 1}/${totalSlides}`;
      }
    }



    
    const swiper11 = new Swiper('.venting-swiper11', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1500,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      on: {
        init: function () {
          const input = document.getElementById('slide-pno11');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        },
        slideChange: function () {
          const input = document.getElementById('slide-pno11');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        }
      }
    });
    
    function updateSlideNumber(currentIndex, totalSlides, input) {
      if (input) {
        input.textContent = `${currentIndex + 1}/${totalSlides}`;
      }
    }
    

    const swiper44 = new Swiper('.venting-swiper44', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1500,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      on: {
        init: function () {
          const input = document.getElementById('slide-pno44');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        },
        slideChange: function () {
          const input = document.getElementById('slide-pno44');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        }
      }
    });
    
    function updateSlideNumber(currentIndex, totalSlides, input) {
      if (input) {
        input.textContent = `${currentIndex + 1}/${totalSlides}`;
      }
    }


    
    const swiper51 = new Swiper('.venting-swiper51', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1500,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      on: {
        init: function () {
          const input = document.getElementById('slide-pno51');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        },
        slideChange: function () {
          const input = document.getElementById('slide-pno51');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        }
      }
    });
    
    function updateSlideNumber(currentIndex, totalSlides, input) {
      if (input) {
        input.textContent = `${currentIndex + 1}/${totalSlides}`;
      }
    }


    const swiper56 = new Swiper('.venting-swiper56', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1500,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      on: {
        init: function () {
          const input = document.getElementById('slide-pno56');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        },
        slideChange: function () {
          const input = document.getElementById('slide-pno56');
          updateSlideNumber(this.activeIndex, this.slides.length, input);
        }
      }
    });
    
    function updateSlideNumber(currentIndex, totalSlides, input) {
      if (input) {
        input.textContent = `${currentIndex + 1}/${totalSlides}`;
      }
    }