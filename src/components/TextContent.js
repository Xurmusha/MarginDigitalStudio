import React from 'react';
import CheckboxForContent from "./CheckboxForContent";

const TextContent = (props) => {


    return (
        <div id="TextContent">
            <div className="container">
                <div className="row" style={{marginBottom: props.marginBottom}}>
                    <div className="col-12">
                        <div className="card border-0">
                            <div className="card-header border-bottom-0">
                                <h3><span>1. </span> Текст
                                    <span> контент </span></h3>
                            </div>

                            <div className="card-body py-0">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="card border-0">
                                            <div className="card-body">
                                                <CheckboxForContent number="Копия" id="input6" idLabel="copy"
                                                                    text1="Скопировать
                                                                        текст у иностранных конкурентов"
                                                                    textSize="36px" class="d-none" classText="pl-3"
                                                                    classBrouser="d-none" classForLabel="pr-5"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="card border-0">
                                            <div className="card-body">
                                                <CheckboxForContent number="Рерайт" id="write" idLabel="rewrite"
                                                                    text1="Копия контента с изменением текста для
                                                                        повышения его уникальности"
                                                                    textSize="36px" class="d-none" classText="pl-3"
                                                                    classBrouser="d-none" classForLabel="pr-5"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="card border-0">
                                            <div className="card-body">
                                                <CheckboxForContent number="Копирайт" id="CopyWrite" idLabel="copyWrite"
                                                                    text1="с ответами на вопросы
                                                                        по вашей нише" textBold1="1 Заполняем бриф"
                                                                    text2="
                                                                        профессиональным копирайтером исходя из ваших
                                                                        ответов"
                                                                    textBold2="2 Написание продающего текста"
                                                                    textSize="36px" class="d-none" classText="pl-3"
                                                                    classTextTwo="pl-3" classBrouser="d-none"
                                                                    classForLabel="pr-5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`row align-items-center mb-4 ${props.classContent}`} id="unShowed" >
                                    <h3 className="mb-0 ml-5 mr-3">Описания товаров?</h3>

                                    <CheckboxForContent
                                        number="Уже есть"
                                        id="have" idLabel="yes"
                                        textSize="36px" classText="pl-3"
                                        classTextTwo="pl-3" class="d-none"
                                        classBrouser="d-none"
                                        classForLabel="pr-3 pb-xl-0"/>

                                        <div className="mr-3"></div>
                                    <CheckboxForContent
                                        number="Нужно"
                                        id="haveTo" idLabel="must"
                                        textSize="36px" classText="pl-3"
                                        classTextTwo="pl-3" class="d-none"
                                        classBrouser="d-none"
                                        classForLabel="pr-3 pb-xl-0"/>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TextContent;