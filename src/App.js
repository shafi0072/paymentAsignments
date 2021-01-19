import './App.css';

function App() {
    function pad2(n) { return n < 10 ? '0' + n : n }

var date = new Date();

const data =  date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() );
    return (
        <div className="App">
            <form method="POST" action="https://test.api.securepay.com.au/directpost/authorise">

                {/* Hidden fields: */}
                <input type="hidden" name="EPS_MERCHANT" value="ABC0001"/>
                <input type="hidden" name="EPS_TXNTYPE" value="0"/>
               
                <input type="hidden" name="EPS_AMOUNT" value="1.00"/>
                <input type="hidden" name="EPS_TIMESTAMP" value={data}/>
                <input type="hidden" name="EPS_FINGERPRINT"  value="01a1edbb159aa01b99740508d79620251c2f871d"/>
                <input type="hidden" name="EPS_RESULTURL" value="https://www.resulturl.com"/>
                <input type="hidden" name="EPS_REFERENCEID" value="Invoice#642193"/>

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
