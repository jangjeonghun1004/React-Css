# 인라인 스타일
    style={{ backgroundColor: "white" }}

# 인라인 스타일 확장
    const styleName = {backgroundColor: "white"}
    style={{...styleName, color:"black"}}

# 클래스 스타일
    .cssClass = {background-color: red; color:white}
    className={.cssClass}

# 스타일 모듈 사용
    CssFileNameA.module.css
     .cssClass = {background-color: red; color:white}

    CssFileNameB.module.css
     .cssClass = {background-color: red; color:blue}

    import styles from 'CssFileNameA.module.css'
    className={style.cssClass}

    ".cssClass" 클래스 이름이 동일해도 "module" 키워드로 인해
    import 시점에 분류가 된다. 