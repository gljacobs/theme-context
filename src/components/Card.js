import React from 'react';

function Card(props) {

    return (
            <div class="card" style={{ width: "50vw",  height: "200px", margin: "15vh auto"}}>
                <div class="card-content center" style={{ padding: "40px"}}>
                    <span class="card-title">Change Theme</span>
                    <br />
                    <button class="btn-large waves-effect waves-light">
                        { props.theme === "light" ? "Dark" : "Light" }
                        <i class="material-icons right">
                            { props.theme === "light" ? "brightness_4" : "brightness_5" }
                        </i>
                    </button>
                </div>
            </div>
    )
}

export default Card;