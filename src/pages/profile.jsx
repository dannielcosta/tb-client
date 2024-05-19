import React from 'react'

function profile() {
  return (

    <div className="form">
        <div className="logo" style={{color: 'black'}}>logo here</div>
        <div className="form" style={{backgroundColor: 'gray'}}  >
            <div className="Profile">
                <div>Nome: {/*USER FIRST NAME + USER LAST NAME*/}</div>
                <div>Tel: {/*USER PHONE NUMBER*/}</div>
                <div>Email: {/*USER EMAIL*/}</div>
                <div className="form">Próxima marcação:
                <div className="data" style={{display:'flex'}}>
                    <div className="data">Data + Hora
                    </div>
                    <div className="data">
                        <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="29.5" cy="29.5" r="29.5" fill="#9C9C9C" fill-opacity="0.62"/>
                        <path d="M26.4152 14.0909V25H25.0941V15.4759H25.0302L22.3669 17.2443V15.902L25.0941 14.0909H26.4152ZM32.9617 25.1491C32.3367 25.1491 31.7738 25.0249 31.2731 24.7763C30.7724 24.5277 30.3711 24.1868 30.0693 23.7536C29.7674 23.3203 29.6023 22.8267 29.5739 22.2727H30.8523C30.902 22.7663 31.1258 23.1747 31.5235 23.4979C31.9248 23.8175 32.4042 23.9773 32.9617 23.9773C33.4091 23.9773 33.8069 23.8725 34.1549 23.663C34.5064 23.4535 34.7816 23.1658 34.9805 22.8001C35.1829 22.4308 35.2841 22.0135 35.2841 21.5483C35.2841 21.0724 35.1794 20.6481 34.9699 20.2752C34.7639 19.8988 34.4798 19.6023 34.1176 19.3857C33.7554 19.169 33.3417 19.0589 32.8765 19.0554C32.5427 19.0518 32.2 19.1033 31.8484 19.2099C31.4968 19.3129 31.2074 19.446 30.9802 19.6094L29.7444 19.4602L30.4049 14.0909H36.0725V15.2628H31.5128L31.1293 18.4801H31.1932C31.4169 18.3026 31.6975 18.1552 32.0348 18.038C32.3722 17.9208 32.7238 17.8622 33.0895 17.8622C33.7571 17.8622 34.352 18.022 34.874 18.3416C35.3995 18.6577 35.8115 19.0909 36.1098 19.6413C36.4116 20.1918 36.5625 20.8203 36.5625 21.527C36.5625 22.223 36.4063 22.8445 36.0938 23.3913C35.7848 23.9347 35.3587 24.3643 34.8154 24.6804C34.2721 24.9929 33.6542 25.1491 32.9617 25.1491Z" fill="black"/>
                        <path d="M24.2219 36.6506L23.0926 36.9702C23.0216 36.782 22.9169 36.5991 22.7784 36.4215C22.6434 36.2404 22.4588 36.0913 22.2244 35.9741C21.99 35.8569 21.6899 35.7983 21.3242 35.7983C20.8235 35.7983 20.4062 35.9137 20.0724 36.1445C19.7421 36.3718 19.577 36.6612 19.577 37.0128C19.577 37.3253 19.6907 37.5721 19.9179 37.7532C20.1452 37.9343 20.5003 38.0852 20.9833 38.206L22.1978 38.5043C22.9293 38.6818 23.4744 38.9535 23.8331 39.3192C24.1917 39.6815 24.371 40.1484 24.371 40.7202C24.371 41.1889 24.2361 41.608 23.9662 41.9773C23.6999 42.3466 23.327 42.6378 22.8476 42.8509C22.3682 43.0639 21.8107 43.1705 21.175 43.1705C20.3405 43.1705 19.6498 42.9893 19.1029 42.6271C18.5561 42.2649 18.2098 41.7358 18.0642 41.0398L19.2574 40.7415C19.371 41.1818 19.5859 41.5121 19.9019 41.7322C20.2215 41.9524 20.6388 42.0625 21.1537 42.0625C21.7397 42.0625 22.2049 41.9382 22.5493 41.6896C22.8973 41.4375 23.0713 41.1357 23.0713 40.7841C23.0713 40.5 22.9719 40.2621 22.773 40.0703C22.5742 39.875 22.2688 39.7294 21.8568 39.6335L20.4932 39.3139C19.7439 39.1364 19.1935 38.8612 18.8419 38.4883C18.4939 38.1119 18.3199 37.6413 18.3199 37.0767C18.3199 36.6151 18.4495 36.2067 18.7088 35.8516C18.9715 35.4964 19.3284 35.2177 19.7794 35.0153C20.234 34.8129 20.7489 34.7116 21.3242 34.7116C22.1338 34.7116 22.7695 34.8892 23.2311 35.2443C23.6963 35.5994 24.0266 36.0682 24.2219 36.6506ZM29.6938 43.1705C28.9054 43.1705 28.2254 42.9964 27.6536 42.6484C27.0854 42.2969 26.6469 41.8068 26.3379 41.1783C26.0325 40.5462 25.8798 39.8111 25.8798 38.973C25.8798 38.1349 26.0325 37.3963 26.3379 36.7571C26.6469 36.1143 27.0766 35.6136 27.627 35.255C28.181 34.8928 28.8273 34.7116 29.5659 34.7116C29.9921 34.7116 30.4129 34.7827 30.8283 34.9247C31.2438 35.0668 31.622 35.2976 31.9629 35.6172C32.3038 35.9332 32.5755 36.3523 32.7779 36.8743C32.9803 37.3963 33.0815 38.0391 33.0815 38.8026V39.3352H26.7747V38.2486H31.8031C31.8031 37.7869 31.7108 37.375 31.5261 37.0128C31.345 36.6506 31.0858 36.3647 30.7484 36.1552C30.4146 35.9457 30.0205 35.8409 29.5659 35.8409C29.0652 35.8409 28.632 35.9652 28.2662 36.2138C27.904 36.4588 27.6252 36.7784 27.4299 37.1726C27.2346 37.5668 27.1369 37.9893 27.1369 38.4403V39.1648C27.1369 39.7827 27.2435 40.3065 27.4565 40.7362C27.6732 41.1623 27.9732 41.4872 28.3568 41.7109C28.7403 41.9311 29.1859 42.0412 29.6938 42.0412C30.024 42.0412 30.3223 41.995 30.5886 41.9027C30.8585 41.8068 31.0911 41.6648 31.2864 41.4766C31.4818 41.2848 31.6327 41.0469 31.7392 40.7628L32.9537 41.1037C32.8259 41.5156 32.611 41.8778 32.3092 42.1903C32.0073 42.4993 31.6345 42.7408 31.1906 42.9148C30.7467 43.0852 30.2477 43.1705 29.6938 43.1705ZM35.7116 34.8182L37.6718 38.1634L39.6321 34.8182H41.0809L38.4389 38.9091L41.0809 43H39.6321L37.6718 39.8253L35.7116 43H34.2627L36.8622 38.9091L34.2627 34.8182H35.7116Z" fill="#0047FF"/>
                        </svg>
                    </div>
                </div>
                <div className="">Barber</div>
                <div style={{color:'red'}}>Cancel</div>
                </div>
                
                
            </div>
        </div>

    </div>
  )
}

export default profile