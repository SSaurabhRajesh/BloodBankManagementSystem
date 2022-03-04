import React, { Component } from 'react';

class BloodTestLog extends Component {
    render() {
        return (
            <div>
                 <form action="" method="post">
        <table class="center table table-striped table-hover" style="width: 40%; height: 100%; padding: 30px; margin-top: 200px;">
            <tr>
                <td colspan="3"><h3>Blood Tests log</h3></td>
            </tr>
             <tr>
                <th>Sr. No.</th>
                <th>Test</th>
                <th>Output</th>
            </tr>
            <tr>
                <td>
                    1.
                </td>
                <td>
                    Hepatitis B
                </td>
                <td>
                 <input class="form-check-input" type="radio" name="T1" id="T1T" value="T1T"/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T1" id="T1F" value="T1F"/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
                </td>
            </tr>
            <tr>
             <td>
                 2.
             </td>
             <td>
                 Hepatitis C
             </td>
             <td>
                 <input class="form-check-input" type="radio" name="T2" id="T2T" value="T2T"/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T2" id="T2F" value="T2F"/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
             </td>
         </tr>
         <tr>
             <td>
                 3.
             </td>
             <td>
                HIV/AIDS
             </td>
             <td>
                 <input class="form-check-input" type="radio" name="T3" id="T3T" value="T3T"/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T3" id="T3F" value="T3F"/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
             </td>
         </tr>
         <tr>
             <td>
                 4.
             </td>
             <td>
                 Syphilis
             </td>
             <td>
                 <input class="form-check-input" type="radio" name="T4" id="T4T" value="T4T"/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T4" id="T4F" value="T4F"/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
             </td>
         </tr>
         <tr>
             <td>
                 5.
             </td>
             <td>
                 Maleria
             </td>
             <td>
                 <input class="form-check-input" type="radio" name="T5" id="T5T" value="T5T"/>
                 <label class="form-check-label" for="inlineRadio1">Positive</label>
                 <input class="form-check-input" type="radio" name="T5" id="T5F" value="T5F"/>
                 <label class="form-check-label" for="inlineRadio1">Negative</label>
             </td>
         </tr>
         <tr>
             <td colspan="4">
                 <div class="center" style="width: 40%;">
                     <button type="reset" class="btn btn-outline-warning" style="width: auto; float: left; ">Reset</button>
                     <button type="submit" class="btn btn-outline-success" style="width: auto; float: right;">SUBMIT</button>    
                 </div>
             </td>
         </tr>
         </table>
    </form>
            </div>
        );
    }
}

export default BloodTestLog;