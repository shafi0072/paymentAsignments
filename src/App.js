import './App.css';

function App() {
    return (
        <div className="App">
            <form
                method="POST"
                action="https://test.api.securepay.com.au/directpost/authorise">

                {/* Hidden fields: */}
                <input type="hidden" name="EPS_MERCHANT" value="ABC0010"/>
                <input type="hidden" name="EPS_TXNTYPE" value="0"/>
                <input type="hidden" name="EPS_REFERENCEID" value="Test Reference"/>
                <input type="hidden" name="EPS_AMOUNT" value="1.00"/>
                <input type="hidden" name="EPS_TIMESTAMP" value="201106141010"/>
                <input
                    type="hidden"
                    name="EPS_FINGERPRINT"
                    value="01a1edbb159aa01b99740508d79620251c2f871d"/>
                <input type="hidden" name="EPS_RESULTURL" value="https://www.resulturl.com"/>
                <input type="hidden" name="EPS_REFERENCEID" value="Invoice#642193"/>
                <input type="hidden" name="EPS_TXNTYPE" value="1"/>
                <input type="hidden" name="EPS_AMOUNT" value="53.20"/>
                <input type="hidden" name="EPS_TIMESTAMP" value="20110620123505"/>
                <input type="hidden"
                    name="EPS_FINGERPRINT"
                    value="dae18a7c6b223472c7a7c8116acbdbf1170a033c89f3b9b8f940069c453436de"/> 
{/* Customer-entered fields: */}

                <input type="text" name="EPS_CARDNUMBER"/>
                <input type="text" name="EPS_EXPIRYMONTH"/>
                <input type="text" name="EPS_EXPIRYYEAR"/>
                <input type="text" name="EPS_CCV"/>
                <input type="submit" value="submit"/>
            </form>

        </div>
    );
}

export default App;
