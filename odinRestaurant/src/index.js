import { loadDescription } from "./descriptionloader";
import { loadPage } from "./pageloader";
import { menuLoad } from "./menuLoader";
import "./style.css";
// import { loadDescription, unloadDescription} from './descriptionloader';

export const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

loadPage();

const tabContainer = document.createElement("div");
tabContainer.classList.add("tab-container");
content.appendChild(tabContainer);

const prevBtnContainer = document.createElement("div");
prevBtnContainer.classList.add("tab-btn-container");
tabContainer.appendChild(prevBtnContainer);
const prevBtn = document.createElement("button");
prevBtn.innerText = "<";
prevBtn.classList.add("tab-btn");
prevBtnContainer.appendChild(prevBtn);

const nextBtnContainer = document.createElement("div");
nextBtnContainer.classList.add("tab-btn-container");
tabContainer.appendChild(nextBtnContainer);
const nextBtn = document.createElement("button");
nextBtn.innerText = ">";
nextBtn.classList.add("tab-btn");
nextBtnContainer.appendChild(nextBtn);

const tabContent = document.createElement("div");
tabContent.classList.add("tab-content");
tabContainer.appendChild(tabContent);

loadDescription(tabContent);
let focus = 'desc';
document.querySelectorAll('.tab-btn').forEach(item => {
  item.addEventListener("click", () => {
    console.log('Button Clicked')
    if (focus == 'desc') {
      unloadTabContent();
      console.log('menu Loaded');
      menuLoad(tabContent);
      focus = 'menu';
    }
    else if (focus == 'menu') {
      unloadTabContent();
      console.log('desc Loaded');
      loadDescription(tabContent);
      focus = 'desc';
    }
  
  });
})

function unloadTabContent() {
  while (tabContent.firstChild != null) {
    tabContent.removeChild(tabContent.lastChild);
  }
}
