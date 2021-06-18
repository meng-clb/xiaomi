window.addEventListener('load', function () {

    let tabs = document.querySelector('#tabs');
    let lis = tabs.children;
    let uls = document.querySelector('#uls').querySelectorAll('ul');
    // 点击不同的li,切换不同的导航栏和页面信息
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function () {
            for (let i = 0; i < lis.length; i++) {
                uls[i].className = 'clearfix';
                lis[i].className = '';
            }
            this.className = 'active';
            uls[i].className = 'clearfix show';
        })
    }

    let tabsTop = tabs.offsetTop;
    // 当页面滚动到一定距离,导航栏固定在一个位置
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= tabsTop) {
            tabs.className = 'container posFixed';
        } else {
            tabs.className = '';
        }
    })

    // 当鼠标经过全部商品分类时, 显示列表
    let navCategory = document.querySelector('.nav-category');
    let link = navCategory.querySelector('a');
    let siteCategory = document.querySelector('.site-category');
    navCategory.addEventListener('mouseover', function () {
        siteCategory.style.display = 'block';
    })
    navCategory.addEventListener('mouseout', function () {
        siteCategory.style.display = 'none';
    })


    // 鼠标经过全部商品类别列表时,列表信息显示
    // let siteCategory = document.querySelector('.site-category');
    let siteList = siteCategory.querySelector('ul').children;
    for (let i = 0; i < siteList.length; i++) {
        let children = siteList[i].querySelector('div');
        siteList[i].addEventListener('mouseover', function () {
            children.style.display = 'block';
        })
        siteList[i].addEventListener('mouseout', function () {
            children.style.display = 'none';
        })

    }

})