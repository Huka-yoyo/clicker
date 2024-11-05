// JavaScript: ここにゲームのロジックが入ります
let count = 0;  // 応援数
let autoClickRate = 0;  // 自動増加数

let item0Cost = 10;// アイテム0の初期コスト
let item1Cost =125;// アイテム1の初期コスト
let item2Cost =1500;// アイテム2の初期コスト
let item3Cost =13000;// アイテム3の初期コスト
let item4Cost =120000;// アイテム4の初期コスト
let item5Cost =1350000;// アイテム5の初期コスト
let item6Cost =20000000;// アイテム6の初期コスト
let item7Cost =350000000;// アイテム7の初期コスト
let item8Cost =5000000000;// アイテム8の初期コスト
let item9Cost =50000000000;// アイテム9の初期コスト
let item10Cost =200000000000;// アイテム10の初期コスト
let item11Cost =3800000000000;// アイテム11の初期コスト
let item12Cost =53300000000000;// アイテム12の初期コスト
let item13Cost =706000000000000;// アイテム13の初期コスト
let item14Cost =9704000000000000;// アイテム14の初期コスト
let item15Cost =10000000000000000;// アイテム15の初期コスト
let item16Cost =102500000000000000;// アイテム16の初期コスト
let item17Cost =1090000000000000000;// アイテム17の初期コスト
let item18Cost =11991000000000000000;// アイテム18の初期コスト
let item19Cost =1.3067E+20;// アイテム19の初期コスト
let item20Cost =1.3865E+21;// アイテム20の初期コスト
let item21Cost =1.58E+22;// アイテム21の初期コスト
let item22Cost =2.6E+23;// アイテム22の初期コスト
let item23Cost =2.6725E+24;// アイテム23の初期コスト
let item24Cost =3.005E+25;// アイテム24の初期コスト
let item25Cost =3.21E+26;// アイテム25の初期コスト
let item26Cost =3.28E+27;// アイテム26の初期コスト
let item27Cost =2.1E+28;// アイテム27の初期コスト
let item28Cost =1.5E+29;// アイテム28の初期コスト
let item29Cost =1.1E+30;// アイテム29の初期コスト
let item30Cost =8.3E+31;// アイテム30の初期コスト
let item31Cost =6.4E+32;// アイテム31の初期コスト
let item32Cost =5.1E+33;// アイテム32の初期コスト



let item0Purchased = 0; // アイテム0の購入回数
let item1Purchased = 0; // アイテム1の購入回数
let item2Purchased = 0; // アイテム2の購入回数
let item3Purchased = 0; // アイテム3の購入回数
let item4Purchased = 0; // アイテム4の購入回数
let item5Purchased = 0; // アイテム5の購入回数
let item6Purchased = 0; // アイテム6の購入回数
let item7Purchased = 0; // アイテム7の購入回数
let item8Purchased = 0; // アイテム8の購入回数
let item9Purchased = 0; // アイテム9の購入回数
let item10Purchased = 0; // アイテム10の購入回数
let item11Purchased = 0; // アイテム11の購入回数
let item12Purchased = 0; // アイテム12の購入回数
let item13Purchased = 0; // アイテム13の購入回数
let item14Purchased = 0; // アイテム14の購入回数
let item15Purchased = 0; // アイテム15の購入回数
let item16Purchased = 0; // アイテム16の購入回数
let item17Purchased = 0; // アイテム17の購入回数
let item18Purchased = 0; // アイテム18の購入回数
let item19Purchased = 0; // アイテム19の購入回数
let item20Purchased = 0; // アイテム20の購入回数
let item21Purchased = 0; // アイテム21の購入回数
let item22Purchased = 0; // アイテム22の購入回数
let item23Purchased = 0; // アイテム23の購入回数
let item24Purchased = 0; // アイテム24の購入回数
let item25Purchased = 0; // アイテム25の購入回数
let item26Purchased = 0; // アイテム26の購入回数
let item27Purchased = 0; // アイテム27の購入回数
let item28Purchased = 0; // アイテム28の購入回数
let item29Purchased = 0; // アイテム29の購入回数
let item30Purchased = 0; // アイテム30の購入回数
let item31Purchased = 0; // アイテム31の購入回数
let item32Purchased = 0; // アイテム32の購入回数


// クリックで応援人数を増加（画像をクリックする処理）
        document.getElementById("clicker").addEventListener("click", function() {
            count++;
            updateCounter();
        });





document.getElementById("buyItem0").addEventListener("click", function() {
     if (count >= item0Cost) { 
        count -= item0Cost; 
        item0Purchased++; 
        item0Cost = Math.ceil(item0Cost * 1.1); 
        autoClickRate +=0.1;
  
        updateCounter();
        document.getElementById('buyItem0Price').textContent = item0Cost + 'ポイント';
        
        } else {
            alert("ポイントが足りません！");
            
}
});
document.getElementById("buyItem1").addEventListener("click", function() {  
    if (count >= item1Cost) { 
        count -= item1Cost;
        item1Purchased++;
        item1Cost = Math.ceil(item1Cost * 1.1);
        autoClickRate +=1;
        
        updateCounter();    
        document.getElementById('buyItem1Price').textContent = item1Cost + 'ポイント';
        } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem2").addEventListener("click", function() {  
    if (count >= item2Cost) { 
        count -= item2Cost;
        item2Purchased++; // アイテム2
        item2Cost = Math.ceil(item2Cost * 1.1);
        autoClickRate +=9;
        
        updateCounter();    document.getElementById('buyItem2Price').textContent = item2Cost + 'ポイント';
        } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem3").addEventListener("click", function() {  if (count >= item3Cost) { 
    count -= item3Cost;
    item3Purchased++; // アイテム3
    item3Cost = Math.ceil(item3Cost * 1.1);
    autoClickRate +=45;
    
    updateCounter();    document.getElementById('buyItem3Price').textContent = item3Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem4").addEventListener("click", function() {  if (count >= item4Cost) { 
    count -= item4Cost;
    item4Purchased++; // アイテム4
    item4Cost = Math.ceil(item4Cost * 1.1);
    autoClickRate +=250;
    
    updateCounter();    document.getElementById('buyItem4Price').textContent = item4Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem5").addEventListener("click", function() {  if (count >= item5Cost) { 
    count -= item5Cost;
    item5Purchased++; // アイテム5
    item5Cost = Math.ceil(item5Cost * 1.1);
    autoClickRate +=1450;
    
    updateCounter();    document.getElementById('buyItem5Price').textContent = item5Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem6").addEventListener("click", function() {  if (count >= item6Cost) { 
    count -= item6Cost;
    item6Purchased++; // アイテム6
    item6Cost = Math.ceil(item6Cost * 1.1);
    autoClickRate +=8000;
    
    updateCounter();    document.getElementById('buyItem6Price').textContent = item6Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem7").addEventListener("click", function() {  if (count >= item7Cost) { 
    count -= item7Cost;
    item7Purchased++; // アイテム7
    item7Cost = Math.ceil(item7Cost * 1.1);
    autoClickRate +=45000;
    
    updateCounter();    document.getElementById('buyItem7Price').textContent = item7Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem8").addEventListener("click", function() {  if (count >= item8Cost) { 
    count -= item8Cost;
    item8Purchased++; // アイテム8
    item8Cost = Math.ceil(item8Cost * 1.1);
    autoClickRate +=256000;
    
    updateCounter();    document.getElementById('buyItem8Price').textContent = item8Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem9").addEventListener("click", function() {  if (count >= item9Cost) { 
    count -= item9Cost;
    item9Purchased++; // アイテム9
    item9Cost = Math.ceil(item9Cost * 1.1);
    autoClickRate +=1560000;
    
    updateCounter();    document.getElementById('buyItem9Price').textContent = item9Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem10").addEventListener("click", function() {  if (count >= item10Cost) { 
    count -= item10Cost;
    item10Purchased++; // アイテム10
    item10Cost = Math.ceil(item10Cost * 1.1);
    autoClickRate +=12000000;
    
    updateCounter();    document.getElementById('buyItem10Price').textContent = item10Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem11").addEventListener("click", function() {  if (count >= item11Cost) { 
    count -= item11Cost;
    item11Purchased++; // アイテム11
    item11Cost = Math.ceil(item11Cost * 1.1);
    autoClickRate +=63000000;
    
    updateCounter();    document.getElementById('buyItem11Price').textContent = item11Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem12").addEventListener("click", function() {  
    if (count >= item12Cost) { 
        count -= item12Cost;
        item12Purchased++; // アイテム12
        item12Cost = Math.ceil(item12Cost * 1.1);
        autoClickRate +=452000000;

updateCounter();    document.getElementById('buyItem12Price').textContent = item12Cost + 'ポイント';
} else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem13").addEventListener("click", function() {  
    if (count >= item13Cost) { 
count -= item13Cost;
item13Purchased++; // アイテム13
item13Cost = Math.ceil(item13Cost * 1.1);

autoClickRate +=2154000000;

updateCounter();    document.getElementById('buyItem13Price').textContent = item13Cost + 'ポイント';
} else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem14").addEventListener("click", function() {  if (count >= item14Cost) { 
count -= item14Cost;
item14Purchased++; // アイテム14
item14Cost = Math.ceil(item14Cost * 1.1);
autoClickRate +=38330000000;

updateCounter();    document.getElementById('buyItem14Price').textContent = item14Cost + 'ポイント';
} else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem15").addEventListener("click", function() {  if (count >= item15Cost) { 
count -= item15Cost;
item15Purchased++; // アイテム15
item15Cost = Math.ceil(item15Cost * 1.1);
25
autoClickRate +=257500000000;

updateCounter();    document.getElementById('buyItem15Price').textContent = item15Cost + 'ポイント';
} else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem16").addEventListener("click", function() {  if (count >= item16Cost) { 
    count -= item16Cost;
    item16Purchased++; // アイテム16
    item16Cost = Math.ceil(item16Cost * 1.1);
    26
    autoClickRate +=3559000000000;
    
    updateCounter();    document.getElementById('buyItem16Price').textContent = item16Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem17").addEventListener("click", function() {  if (count >= item17Cost) { 
    count -= item17Cost;
    item17Purchased++; // アイテム17
    item17Cost = Math.ceil(item17Cost * 1.1);
    27
    autoClickRate +=62540000000000;
    
    updateCounter();    document.getElementById('buyItem17Price').textContent = item17Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem18").addEventListener("click", function() {  if (count >= item18Cost) { 
    count -= item18Cost;
    item18Purchased++; // アイテム18
    item18Cost = Math.ceil(item18Cost * 1.1);
    28
    autoClickRate +=474300000000000;
    
    updateCounter();    document.getElementById('buyItem18Price').textContent = item18Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem19").addEventListener("click", function() {  if (count >= item19Cost) { 
    count -= item19Cost;
    item19Purchased++; // アイテム19
    item19Cost = Math.ceil(item19Cost * 1.1);
    29
    autoClickRate +=3842000000000000;
    
    updateCounter();    document.getElementById('buyItem19Price').textContent = item19Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem20").addEventListener("click", function() {  if (count >= item20Cost) { 
    count -= item20Cost;
    item20Purchased++; // アイテム20
    item20Cost = Math.ceil(item20Cost * 1.1);
    30
    autoClickRate +=43680000000000000;
    
    updateCounter();    document.getElementById('buyItem20Price').textContent = item20Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
})
document.getElementById("buyItem21").addEventListener("click", function() {  if (count >= item21Cost) { 
    count -= item21Cost;
    item21Purchased++; // アイテム21
    item21Cost = Math.ceil(item21Cost * 1.1);
    31
    autoClickRate +=374700000000000000;
    
    updateCounter();    document.getElementById('buyItem21Price').textContent = item21Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem22").addEventListener("click", function() {  if (count >= item22Cost) { 
    count -= item22Cost;
    item22Purchased++; // アイテム22
    item22Cost = Math.ceil(item22Cost * 1.1);
    32
    autoClickRate +=5960000000000000000;
    
    updateCounter();    document.getElementById('buyItem22Price').textContent = item22Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem23").addEventListener("click", function() {  if (count >= item23Cost) { 
    count -= item23Cost;
    item23Purchased++; // アイテム23
    item23Cost = Math.ceil(item23Cost * 1.1);
    33
    autoClickRate +=27010000000000000000;
    
    updateCounter();    document.getElementById('buyItem23Price').textContent = item23Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem24").addEventListener("click", function() {  if (count >= item24Cost) { 
    count -= item24Cost;
    item24Purchased++; // アイテム24
    item24Cost = Math.ceil(item24Cost * 1.1);
    34
    autoClickRate +=5.926E+20;
    
    updateCounter();    document.getElementById('buyItem24Price').textContent = item24Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem25").addEventListener("click", function() {  if (count >= item25Cost) { 
    count -= item25Cost;
    item25Purchased++; // アイテム25
    item25Cost = Math.ceil(item25Cost * 1.1);
    35
    autoClickRate +=2.125E+21;
    
    updateCounter();    document.getElementById('buyItem25Price').textContent = item25Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem26").addEventListener("click", function() {  if (count >= item26Cost) { 
    count -= item26Cost;
    item26Purchased++; // アイテム26
    item26Cost = Math.ceil(item26Cost * 1.1);
    36
    autoClickRate +=4.099E+22;
    
    updateCounter();    document.getElementById('buyItem26Price').textContent = item26Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem27").addEventListener("click", function() {  if (count >= item27Cost) { 
    count -= item27Cost;
    item27Purchased++; // アイテム27
    item27Cost = Math.ceil(item27Cost * 1.1);
    37
    autoClickRate +=2.435E+23;
    
    updateCounter();    document.getElementById('buyItem27Price').textContent = item27Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem28").addEventListener("click", function() {  if (count >= item28Cost) { 
    count -= item28Cost;
    item28Purchased++; // アイテム28
    item28Cost = Math.ceil(item28Cost * 1.1);
    38
    autoClickRate +=2.941E+24;
    
    updateCounter();    document.getElementById('buyItem28Price').textContent = item28Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem29").addEventListener("click", function() {  if (count >= item29Cost) { 
    count -= item29Cost;
    item29Purchased++; // アイテム29
    item29Cost = Math.ceil(item29Cost * 1.1);
    39
    autoClickRate +=2.125E+25;
    
    updateCounter();    document.getElementById('buyItem29Price').textContent = item29Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem30").addEventListener("click", function() {  if (count >= item30Cost) { 
    count -= item30Cost;
    item30Purchased++; // アイテム30
    item30Cost = Math.ceil(item30Cost * 1.1);
    40
    autoClickRate +=4.099E+26;
    
    updateCounter();    document.getElementById('buyItem30Price').textContent = item30Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem31").addEventListener("click", function() {  if (count >= item31Cost) { 
    count -= item31Cost;
    item31Purchased++; // アイテム31
    item31Cost = Math.ceil(item31Cost * 1.1);
    41
    autoClickRate +=2.435E+27;
    
    updateCounter();    document.getElementById('buyItem31Price').textContent = item31Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
document.getElementById("buyItem32").addEventListener("click", function() {  if (count >= item32Cost) { 
    count -= item32Cost;
    item32Purchased++; // アイテム32
    item32Cost = Math.ceil(item32Cost * 1.1);
    42
    autoClickRate +=2.941E+28;
    
    updateCounter();    document.getElementById('buyItem32Price').textContent = item32Cost + 'ポイント';
    } else {
    alert("ポイントが足りません！");
    
  }
});
function updateCounter() {
    document.getElementById("counter").textContent = Math.floor(count) + " 人が応援中";
    document.getElementById("autoRate").textContent = "応援者が毎秒 " + Math.floor(autoClickRate) + " 人増加しています";
}

    
// セーブ機能
function saveGame() {
    const gameData = {
        count: Math.floor(count),  // 小数点以下を切り捨てて保存
        autoClickRate: Math.floor(autoClickRate),  // 自動増加数も整数で保存

item0: {
            purchased: item0Purchased,
            cost: item0Cost        
        },
item1: {
            purchased: item1Purchased,
            cost: item1Cost        
        },
item2: {
            purchased: item2Purchased,
            cost: item2Cost        
        },
item3: {
            purchased: item3Purchased,
            cost: item3Cost        
        },
item4: {
            purchased: item4Purchased,
            cost: item4Cost        
        },
item5: {
            purchased: item5Purchased,
            cost: item5Cost       
         },
item6: {
            purchased: item6Purchased,
            cost: item6Cost        
        },
item7: {
            purchased: item7Purchased,
            cost: item7Cost        
        },
item8: {
            purchased: item8Purchased,
            cost: item8Cost        },
item9: {
            purchased: item9Purchased,
            cost: item9Cost        },
item10: {
            purchased: item10Purchased,
            cost: item10Cost        },
item11: {
            purchased: item11Purchased,
            cost: item11Cost        },
item12: {
            purchased: item12Purchased,
            cost: item12Cost        },
item13: {
            purchased: item13Purchased,
            cost: item13Cost        },
item14: {
            purchased: item14Purchased,
            cost: item14Cost        },
item15: {
            purchased: item15Purchased,
            cost: item15Cost        },
item16: {
            purchased: item16Purchased,
            cost: item16Cost        },
item17: {
            purchased: item17Purchased,
            cost: item17Cost        },
item18: {
            purchased: item18Purchased,
            cost: item18Cost        },
item19: {
            purchased: item19Purchased,
            cost: item19Cost        },
item20: {
            purchased: item20Purchased,
            cost: item20Cost        },
item21: {
            purchased: item21Purchased,
            cost: item21Cost        },
item22: {
            purchased: item22Purchased,
            cost: item22Cost        },
item23: {
            purchased: item23Purchased,
            cost: item23Cost        },
item24: {
            purchased: item24Purchased,
            cost: item24Cost        },
item25: {
            purchased: item25Purchased,
            cost: item25Cost        },
item26: {
            purchased: item26Purchased,
            cost: item26Cost        },
item27: {
            purchased: item27Purchased,
            cost: item27Cost        },
item28: {
            purchased: item28Purchased,
            cost: item28Cost        },
item29: {
            purchased: item29Purchased,
            cost: item29Cost        },
item30: {
            purchased: item30Purchased,
            cost: item30Cost        },
item31: {
            purchased: item31Purchased,
            cost: item31Cost        },
item32: {
            purchased: item32Purchased,
            cost: item32Cost        },

    };
    localStorage.setItem('saveData', JSON.stringify(gameData));
    alert('ゲームをセーブしました！');
}

// ロード機能
function loadGame() {
    const savedData = localStorage.getItem('saveData');
    if (savedData) {
        const gameData = JSON.parse(savedData);
        count = Math.floor(gameData.count);  // ロード時に整数に変換
        autoClickRate = Math.floor(gameData.autoClickRate);  // 自動増加数も整数に変換

        item0Purchased = gameData.item0.purchased;
item0Cost =gameData.item0.cost;
item1Purchased = gameData.item1.purchased;
item1Cost =gameData.item1.cost;
item2Purchased = gameData.item2.purchased;
item2Cost =gameData.item2.cost;
item3Purchased = gameData.item3.purchased;
item3Cost =gameData.item3.cost;
item4Purchased = gameData.item4.purchased;
item4Cost =gameData.item4.cost;
item5Purchased = gameData.item5.purchased;
item5Cost =gameData.item5.cost;
item6Purchased = gameData.item6.purchased;
item6Cost =gameData.item6.cost;
item7Purchased = gameData.item7.purchased;
item7Cost =gameData.item7.cost;
item8Purchased = gameData.item8.purchased;
item8Cost =gameData.item8.cost;
item9Purchased = gameData.item9.purchased;
item9Cost =gameData.item9.cost;
item10Purchased = gameData.item10.purchased;
item10Cost =gameData.item10.cost;
item11Purchased = gameData.item11.purchased;
item11Cost =gameData.item11.cost;
item12Purchased = gameData.item12.purchased;
item12Cost =gameData.item12.cost;
item13Purchased = gameData.item13.purchased;
item13Cost =gameData.item13.cost;
item14Purchased = gameData.item14.purchased;
item14Cost =gameData.item14.cost;
item15Purchased = gameData.item15.purchased;
item15Cost =gameData.item15.cost;
item16Purchased = gameData.item16.purchased;
item16Cost =gameData.item16.cost;
item17Purchased = gameData.item17.purchased;
item17Cost =gameData.item17.cost;
item18Purchased = gameData.item18.purchased;
item18Cost =gameData.item18.cost;
item19Purchased = gameData.item19.purchased;
item19Cost =gameData.item19.cost;
item20Purchased = gameData.item20.purchased;
item20Cost =gameData.item20.cost;
item21Purchased = gameData.item21.purchased;
item21Cost =gameData.item21.cost;
item22Purchased = gameData.item22.purchased;
item22Cost =gameData.item22.cost;
item23Purchased = gameData.item23.purchased;
item23Cost =gameData.item23.cost;
item24Purchased = gameData.item24.purchased;
item24Cost =gameData.item24.cost;
item25Purchased = gameData.item25.purchased;
item25Cost =gameData.item25.cost;
item26Purchased = gameData.item26.purchased;
item26Cost =gameData.item26.cost;
item27Purchased = gameData.item27.purchased;
item27Cost =gameData.item27.cost;
item28Purchased = gameData.item28.purchased;
item28Cost =gameData.item28.cost;
item29Purchased = gameData.item29.purchased;
item29Cost =gameData.item29.cost;
item30Purchased = gameData.item30.purchased;
item30Cost =gameData.item30.cost;
item31Purchased = gameData.item31.purchased;
item31Cost =gameData.item31.cost;
item32Purchased = gameData.item32.purchased;
item32Cost =gameData.item32.cost;


        







        // ゲームの表示を更新
        updateCounter();
        document.getElementById('buyItem1Price').textContent = item1Cost + 'ポイント';
        document.getElementById('buyItem2Price').textContent = item2Cost + 'ポイント';
        alert('ゲームをロードしました！');
    } else {
        alert('セーブデータがありません');
    }
}

// カウンターの更新
function updateCounter() {
    document.getElementById("counter").textContent = Math.floor(count) + " 人が応援中";  // 応援者数を整数で表示
    document.getElementById("autoRate").textContent = "応援者が毎秒 " + autoClickRate.toFixed(1) + " 人増加しています";  // 小数第1位まで表示
}

// 毎秒自動で増加
setInterval(function() {
    count += autoClickRate;
    updateCounter();
}, 1000);
