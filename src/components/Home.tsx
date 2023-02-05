import React from 'react';

import './Home.css';

interface HomeType{
    
}

const Home: React.FC<HomeType> = () =>{
    return(
        <div className='topbar'>
            <a href="http://www.naver.com">클릭하면 네이버 </a>
            <a href='http://www.google.com'>클릭하면 구글 </a>
            <a href='http://www.yahoo.jp'>클릭하면 야후재팬 </a>
            </div>
        
    );
};

export default Home;