

const allMsg = [
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporib expedita eaque nesciunt perspiciatis, hic cupiditate perferendis sapiente aliquid nemo, sunt, odio ex ratione optio? Excepturivoluptatibus illo itaque ipsam exercitationem!",
  " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi amet culpa natus.  adipisicing elit iusto vel,  adipisicing eli tcorrupti modi molestiae ea veritatis? A voluptas pariatur quidem quaerat voluptate numquam aperiam nobis temporibus!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur totam veniam, perferendis temporibus nisi, nemo voluptatem doloribus ipsum laboriosam, repellat illum laborum aperiam quod! Reprehenderit, qui fuga?",
];

let msg = document.querySelector(".msg");

let showMsg = 0; 


function progressLoader() {
    const progressBar = document.getElementById("progress");
    let width = 0;
    const interval = setInterval(() => {
        if (width != 100) {
            width++;
            progressBar.style.width = width + "%";
            msg.innerHTML = allMsg[showMsg];
            
        } else{
            width = 0;
            showMsg++;
            msg.innerHTML = allMsg[showMsg];
            if (showMsg === 2) { 
                showMsg = 0
            }
        }
    }, 100);
}
progressLoader();