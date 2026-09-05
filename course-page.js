const courseCatalog={
 "grade-six-math":{level:"ELEMENTARY",title:"小六數學班",focus:"基礎統整・升國中準備",summary:"六年級是國小數學的總整理階段。課程從四則運算、數感與讀題理解出發，陪孩子釐清容易混淆的觀念，建立更穩定的解題步驟，為升上國中做好準備。",points:["四則運算與分數、小數整合","讀題理解與解題步驟練習","小班引導，掌握個別學習狀況"],image:"assets/elementary-learning-illustration.png",alt:"兩位學生一起探索數學的手繪插圖"},
 "calculation":{level:"國小課程",title:"小五小六計算班",focus:"計算技巧・解題耐心",summary:"針對小五、小六的計算基礎進行加強，透過循序練習建立正確的運算技巧、速度與細心度。讓孩子在面對題目時，能更有條理地轉換語意並完成計算。",points:["每週上課兩次，每次 1.5 小時","提升計算速度與準確度","練習正確列式與檢查習慣","培養面對題目的耐心與信心"],image:"assets/elementary-calculation-learning-realistic.png",alt:"兩位小學生一起進行計算練習的真人感教室照片"},
 "bridge":{level:"ELEMENTARY",title:"數學自然銜接",focus:"素養導向・國中先備",summary:"以數學與自然的基礎銜接為主軸，協助孩子在進入新學習階段前，先熟悉觀念脈絡與學習節奏。課程重視理解、應用與提問，讓轉換不只是提前學習，而是做好準備。",points:["數學與自然的先備觀念整理","素養導向的理解與應用","逐步適應國中學習節奏"],image:"assets/elementary-learning-illustration.png",alt:"國小學生一起探索數學與自然的手繪插圖"},
 "science-lab":{level:"ELEMENTARY",title:"科學實驗班",focus:"動手探究・生活科學",summary:"從實驗操作與生活現象出發，讓孩子親手觀察、提問與驗證。課程結合自然科學與生活科技的探究精神，協助學生把抽象原理轉化為看得見、說得出的理解。",points:["自然實驗與生活科技主題","觀察、提問與推理練習","建立對科學的好奇與理解力"],image:"assets/elementary-learning-illustration.png",alt:"學生探索科學與幾何物件的手繪插圖"},
 "grade-seven":{level:"JUNIOR HIGH",title:"國一數學自然班",focus:"觀念養成・學習習慣",summary:"國一的數學與生物，是孩子整合國小知識、建立國中學習習慣的重要起點。昇達重視觀念與態度的培養，循序協助孩子養成自主管理與自律學習的能力。",points:["週考與補考制度，確保學習成效","段考前重點複習，掌握學習盲點與節奏","穩固學習習慣，為國二、國三奠定基礎"],image:"assets/junior-grade-seven-teen-realistic.png",alt:"兩位 14 至 15 歲學生一起進行國一數學與自然學習的真人感教室照片"},
 "grade-eight":{level:"JUNIOR HIGH",title:"國二數學理化班",focus:"抽象思考・邏輯推理",summary:"國二階段加入物理與化學內容，學生需要更能理解抽象概念與關係。課程以數學、理化加強輔導為核心，透過週考與補考制度、段考前重點複習，協助學生掌握盲點與學習節奏，確保學習成效。",points:["數學、理化觀念加強輔導","週考與補考制度，追蹤學習盲點","段考前重點複習與題型演練","循序拆解題目，培養邏輯推理能力"],image:"assets/junior-high-learning-illustration.png",alt:"國中學生一起進行理化與數學討論的手繪插圖"},
 "grade-nine":{level:"JUNIOR HIGH",title:"國三數學自然班",focus:"統整應用・會考準備",summary:"國三課程著重觀念的統整與歸納，協助學生把分散的單元串連為完整架構。透過重點整理與練習回饋，逐步建立面對會考時所需的理解、判讀與應用能力。",points:["數學與自然重點系統整理","統整、歸納與應用題練習","依學習狀況調整複習方向"],image:"assets/junior-high-learning-illustration.png",alt:"國中學生進行數學與自然複習的手繪插圖"},
 "review":{level:"JUNIOR HIGH",title:"國三假日總複習班",focus:"最後衝刺・全面複習・保證有效",summary:"在會考前最後衝刺，針對數學與自然一到六冊進行全面複習；透過單元重點歸納、歷屆題型演練與訂正檢討，讓每一位學生清楚掌握問題、有效準備會考。每年 12 月至 5 月共 20 堂課，每週日 09:00–16:00 上課。",points:["數學、自然一到六冊全方面複習","每單元重點整理歸納","歷屆會考題型演練與講解","會考出題比例分析","確實訂正並檢討問題","課後個別提問輔導","每年四月家長說明會，歡迎提早預約","四到九月詢問享早鳥優惠"],image:"assets/junior-high-learning-illustration.png",alt:"國中學生專注複習數理的手繪插圖"},
 "chinese-tutoring":{level:"SEMESTER COURSE",title:"國文家教班",focus:"閱讀理解・表達練習",summary:"以學生目前的閱讀與文字表達需求為起點，透過文本閱讀、重點整理與題意判讀，逐步建立理解文章與清楚表達的能力。實際安排請透過 LINE 洽詢。",points:["閱讀理解與題意判讀練習","文本重點整理與表達引導","依學生需求確認上課方式"],image:"assets/elementary-learning-illustration.png",alt:"學生閱讀與整理筆記的手繪插圖"}
};
const sceneMap={
 "grade-six-math":{image:"assets/elementary-math-learning.png",note:"從算式的正確性到讀題的完整性，陪孩子把每一步說清楚、做紮實。"},
 "calculation":{image:"assets/elementary-calculation-learning-realistic.png",note:"讓計算不靠猜；在一次次檢查與修正中，養成穩定而細緻的節奏。"},
 "bridge":{image:"assets/elementary-bridge-learning.png",note:"面對新的學習階段，先準備好觀念、方法與願意提問的勇氣。"},
 "science-lab":{image:"assets/junior-science-summer-teen-realistic.png",note:"從親手操作到說出發現，科學的理解就在每一次觀察與討論裡。"},
 "grade-seven":{image:"assets/junior-grade-seven-teen-realistic.png",note:"國一先建立整理與規畫的方法，讓新環境與新課業都有可以依循的步驟。"},
 "grade-eight":{image:"assets/junior-grade-eight-teen-realistic.png",note:"把看似複雜的公式與現象拆開，練習看見它們之間真正的關係。"},
 "grade-nine":{image:"assets/junior-grade-nine-teen-realistic.png",note:"整合數學與自然的核心概念，讓學生在練習中找到自己的解題脈絡。"},
 "review":{image:"assets/junior-review-teen-realistic.png",note:"複習不是不停重做，而是辨識盲點、安排節奏，讓每一次練習都有方向。"},
 "chinese-tutoring":{image:"assets/junior-chinese-teen-realistic.png",note:"從讀懂文字到清楚表達，陪學生把想法整理成屬於自己的語言。"}
};
const current=courseCatalog[document.body.dataset.course];if(current){document.title=`${current.title}｜昇達3號數理補習班`;document.querySelector('[data-level]').textContent=current.level;document.querySelector('[data-title]').textContent=current.title;document.querySelector('[data-focus]').textContent=current.focus;document.querySelector('[data-summary]').textContent=current.summary;document.querySelector('[data-points]').innerHTML=current.points.map(point=>`<li>${point}</li>`).join('');const img=document.querySelector('[data-image]'),scene=sceneMap[document.body.dataset.course];img.src=scene?scene.image:current.image.replace('.png','-v2.png');img.alt=current.alt;if(scene){img.classList.add('course-scene');document.querySelector('.team-note p:not(.eyebrow)').textContent=scene.note;}}

const detailScene=sceneMap[document.body.dataset.course];if(detailScene){const detailSummary=document.querySelector('[data-summary]');const detailContext=document.createElement('p');detailContext.className='course-context';detailContext.textContent=document.body.dataset.course==='grade-seven'?'先修不是提前競逐，而是做好銜接，讓國中學習力全面升級。':detailScene.note;detailSummary.insertAdjacentElement('afterend',detailContext);}



