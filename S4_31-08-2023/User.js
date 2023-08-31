function createTable() {
  var table = document.createElement("table"); //<table>  </table>

  var tr = document.createElement("tr"); //<tr>  </tr>
  var tr1 = document.createElement("tr"); //<tr>  </tr>

  var th1 = document.createElement("th"); //<th>  </th>
  var th2 = document.createElement("th"); //<th>  </th>
  var th3 = document.createElement("th"); //<th>  </th>

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  th1.innerText = "ID";
  th2.innerText = "NAME";
  th3.innerText = "EMAIL";

  td1.innerText = 101;
  td2.innerText = "Kabir Sagar";
  td3.innerText = "Kabir-Sagar@gmail.com";

  tr.appendChild(th1); //<tr><th> </th></tr>
  tr.appendChild(th2); //<tr><th> </th><th> </th></tr>
  tr.appendChild(th3); //<tr><th> </th><th> </th><th> </th></tr>

  tr1.appendChild(td1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);

  tr1.align = "center";

  table.appendChild(tr); //<table> <tr>  </tr> </table>
  table.appendChild(tr1);

  table.width = "800px";
  table.frame = "box";
  table.style.margin = "30px auto";
  table.rules = "all";
  table.cellPadding = "10px";
  table.style.backgroundColor = "black";
  table.style.color = "cornsilk";

  document.getElementById("body").appendChild(table);
}
