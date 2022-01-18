//  1)  to find the output

// var input = [
//     {
//          "id": 1,
//          "title": "Title 1",
//          "childrens": [
//               {
//                    "id": 2,
//                    "title": "Title 2",
//                    "childrens": []
//               }
//          ]
//     },
//     {
//          "id": 3,
//          "title": "Title 3",
//          "childrens": [
//               {
//                    "id": 4,
//                    "title": "Title 4",
//                    "childrens": [
//                         {
//                              "id": 5,
//                              "title": "Title 5",
//                              "childrens": []
//                         }
//                    ]
//               }
//          ]
//     }
// ]

// var output = [
//     {
//          "id": 1,
//          "title": "Title 1",
//          "childrens": []
//     },
//     {
//          "id": 2,
//          "title": "Title 2",
//          "childrens": []
//     },
//     {
//          "id": 3,
//          "title": "Title 3",
//          "childrens": []
//     },
//     {
//          "id": 4,
//          "title": "Title 4",
//          "childrens": []
//     },
//     {
//          "id": 5,
//          "title": "Title 5",
//          "childrens": []
//     }
// ]


// const search = (tree, target) => {
//     if (tree.id === target) {
//       return tree.label;
//     }
    
//     for (const child of tree.child) {
//       const found = search(child, target);
      
//       if (found) {
//         return found;
//       }
//     }
//   };
  
//   const tree = {"id":1,"label":"A","child":[{"id":2,"label":"B","child":[{"id":5,"label":"E","child":[]},{"id":6,"label":"F","child":[]},{"id":7,"label":"G","child":[]}]},{"id":3,"label":"C","child":[]},{"id":4,"label":"D","child":[{"id":8,"label":"H","child":[]},{"id":9,"label":"I","child":[]}]}]};
  
//   console.log(search(tree, 1));
//   console.log(search(tree, 6));
//   console.log(search(tree, 99));
//   console.log(search(tree, 3));
//   console.log(search(tree, 7));
//   console.log(search(tree, 8));
//   console.log(search(tree, 9));


var output=[];
function recurse(object) {
     
          var tempOut={};
          tempOut.id=object.id;
          tempOut.title=object.title;
          tempOut.childrens=[];
          output.push(tempOut);
object.childrens.forEach(function(element){
     recurse(element)
});

     console.log(output);

}

     var data = [
          {
               "id": 1,
               "title": "Title 1",
               "childrens": [
                    {
                         "id": 2,
                         "title": "Title 2",
                         "childrens": []
                    }
               ]
          },
          {
               "id": 3,
               "title": "Title 3",
               "childrens": [
                    {
                         "id": 4,
                         "title": "Title 4",
                         "childrens": [
                              {
                                   "id": 5,
                                   "title": "Title 5",
                                   "childrens": []
                              }
                         ]
                    }
               ]
          }
      ]

     data.forEach(function(obj){
          recurse(obj)
     })
