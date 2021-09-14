window.onload = function () {
    //countAlbums()
    //toggleSection()
    
    const overlaySplash = document.getElementById("overlay")
    setTimeout(function () { overlaySplash.classList.add("d-none") }, 2000);
  }
    
    const toggleDnone = function () { 
/*       const albumdetailsImage = document.getElementById("albumdetailsImage") */
      const albumdetailsText = document.getElementById("albumdetailsText")
      albumdetailsText.classList.toggle("d-none") 
    }
  
/*      EXERCISE 14
        Make every section of the page "collapsable" if the user clicks on the section title (added button)
    */

/*     const toggleSection = function () {
      for (let section of document.querySelectorAll("section")) {
        
        console.log(section)
            
        section.children[1].classList.add("collapse")
        section.children[1].classList.add("show")
            
        section.innerHTML = `
        <button class="btn btn-dark" data-toggle="collapse" data-target="#${section.id} > div" >
          Show/Hide
        </button> 
            ` + section.innerHTML 
            
        } 
    }  */
    
/*    const countAlbums = function () {
      const albumN = document.querySelectorAll("img").length
      const numberOfAlbums = document.getElementById("numberOfAlbums")
      numberOfAlbums.innerHTML = albumN
    }
 */

    const addTrack = function () {      

      const tbodyE = document.querySelector("tbody")
      const tnumber = document.querySelector("#validationCustom01").value
      const tname = document.querySelector("#validationCustom02").value
      const tlength = document.querySelector("#validationCustom03").value
      tbodyE.innerHTML += `<tr class="fadeintransition">
                           <th scope="row">${tnumber}</th>
                           <td>${tname}</td>
                           <td class="d-flex align-items-center">${tlength}<button type="button" class="btn btn-sm delete-button btn-outline-light ml-2 px-1 py-0"
                           onclick="removeRow(event)">DELETE</button></td>                       
                           </tr>` 
      
      document.querySelector(".alert.alert-success").classList.toggle("d-none")

    } 

    function set3sTimeOut(el) {
      setTimeout(()=> {
          el.classList.add('d-none')
      }, 3000)
  }

  const removeRow = function (event) {  
      setTimeout(()=> { 
      const cell = event.target.parentNode
      //console.log(cell)
      const row = cell.parentElement
      row.remove()
      console.log(cell.parentElement)
      }, 1000) 
}
