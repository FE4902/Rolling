import S from "./select.module.scss";

import datas from "../../db/data.json";
import Card from "../../components/Card/Card";

const Select = () => {
    return (
        <div className={S.wrap}>
            <header className={S.header}>
                <h2 className={S.title}>메인 타이틀</h2>
                <p className={S.sub_title}>서브 타이틀</p>
            </header>
            <main className={S.main}>
                <div className={S.list}>
                    {datas.map((data) => {
                        return (
                            <Card
                                symbol={data.symbol}
                                store={data.store}
                                menu={data.menu}
                            ></Card>
                        );
                    })}
                </div>
                <div className={S.message}>메세지</div>
            </main>
            <footer className={S.footer}>
                <button className={S.button}>버튼</button>
            </footer>
        </div>
    );
};

export default Select;
