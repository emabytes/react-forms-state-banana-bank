import React, { Component } from 'react';

class Form extends Component {
    state = {
        inputNum: 0,
        newNum: 0,
        data: []
    }
    handleChangeInputNum = (event) => {
        this.setState({ newNum: event.target.value });
    }
    handleEinzahlen = (event) => {
        this.setState({ inputNum: Number(this.state.inputNum) + Number(this.state.newNum) });
        event.preventDefault();
    }
    handleAuszahlen = (event) => {
        this.setState({ inputNum: Number(this.state.inputNum) - Number(this.state.newNum) });
        event.preventDefault();
    }

    render() {
        return (
            <section>
                <form className="konto" onSubmit={this.handleSubmit}>
                    <h1 id="title">Banana Bank</h1>
                    <h3>Dein Girokonto</h3>
                    <h2 className="konto">{this.state.inputNum}</h2>
                    <div>
                        <input className="geldbetrag" type="number" placeholder="Gib einen Geldbetrag ein"
                            onChange={this.handleChangeInputNum}
                        />
                        <input className="auszahlen" type="button" value="Einzahlen" onClick={this.handleEinzahlen} />
                        <input className="einzahlen" type="button" value="Auszahlen" onClick={this.handleAuszahlen} />
                    </div>
                </form>
            </section>
        );
    }
}

export default Form;