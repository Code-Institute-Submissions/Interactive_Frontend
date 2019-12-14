{"filter":false,"title":"maps.js","tooltip":"/support/maps.js","undoManager":{"mark":35,"position":35,"stack":[[{"start":{"row":0,"column":0},"end":{"row":26,"column":17},"action":"insert","lines":["<script>","            function initMap() {","                var map = new google.maps.Map(document.getElementById(\"map\"), {","                    zoom: 3,","                    center: {","                        lat: 46.619261,","                        lng: -33.134766","                    }","                });","                ","                var labels = \"ABCDEFGHIJKLMANOPQRSTUVWXYZ\";","                ","                var locations = [","                    {lat: 51.5486, lng: -0.0071},","                    {lat: 51.5523, lng: 0.0469}","                ];","                var markers = locations.map(function(location, i){","                    return new google.maps.Marker({","                        position: location,","                        label: labels[i % labels.length]","                    });","                });","                ","                var markerCluster = new MarkerClusterer(map, markers,","                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});","            }","        </script>"],"id":1}],[{"start":{"row":0,"column":8},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":2},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"remove","lines":[">"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"remove","lines":["t"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["p"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["i"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":["r"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"remove","lines":["c"]},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":["s"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["<"]},{"start":{"row":0,"column":0},"end":{"row":0,"column":4},"action":"remove","lines":["    "]},{"start":{"row":0,"column":0},"end":{"row":0,"column":4},"action":"remove","lines":["    "]},{"start":{"row":0,"column":0},"end":{"row":0,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"remove","lines":["    "],"id":3},{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"remove","lines":["    "]},{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    "],"id":4},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":17},"action":"remove","lines":["        </script>"],"id":5}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":12},"action":"remove","lines":["    "],"id":6},{"start":{"row":3,"column":0},"end":{"row":3,"column":6},"action":"remove","lines":["      "]},{"start":{"row":3,"column":8},"end":{"row":3,"column":14},"action":"remove","lines":["      "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"remove","lines":["   "]},{"start":{"row":4,"column":12},"end":{"row":4,"column":21},"action":"remove","lines":["         "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":9},"action":"remove","lines":["         "]},{"start":{"row":5,"column":12},"end":{"row":5,"column":15},"action":"remove","lines":["   "]},{"start":{"row":6,"column":8},"end":{"row":6,"column":20},"action":"remove","lines":["            "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":12},"action":"remove","lines":["            "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":16},"action":"remove","lines":["                "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":12},"action":"remove","lines":["            "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":16},"action":"remove","lines":["                "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":12},"action":"remove","lines":["            "]},{"start":{"row":12,"column":8},"end":{"row":12,"column":18},"action":"remove","lines":["          "]},{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"insert","lines":["{"]},{"start":{"row":12,"column":10},"end":{"row":12,"column":12},"action":"remove","lines":[" {"]},{"start":{"row":12,"column":36},"end":{"row":12,"column":37},"action":"insert","lines":[" "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["   "]},{"start":{"row":13,"column":8},"end":{"row":13,"column":16},"action":"remove","lines":["        "]},{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["{"]},{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"remove","lines":["{"]},{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":[" "]},{"start":{"row":14,"column":4},"end":{"row":14,"column":16},"action":"remove","lines":["            "]},{"start":{"row":15,"column":4},"end":{"row":15,"column":16},"action":"remove","lines":["            "]},{"start":{"row":15,"column":53},"end":{"row":15,"column":54},"action":"insert","lines":[" "]},{"start":{"row":16,"column":8},"end":{"row":16,"column":20},"action":"remove","lines":["            "]},{"start":{"row":17,"column":12},"end":{"row":17,"column":24},"action":"remove","lines":["            "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"remove","lines":["    "]},{"start":{"row":18,"column":12},"end":{"row":18,"column":20},"action":"remove","lines":["        "]},{"start":{"row":19,"column":8},"end":{"row":19,"column":20},"action":"remove","lines":["            "]},{"start":{"row":20,"column":4},"end":{"row":20,"column":16},"action":"remove","lines":["            "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":16},"action":"remove","lines":["                "]},{"start":{"row":22,"column":4},"end":{"row":22,"column":16},"action":"remove","lines":["            "]},{"start":{"row":22,"column":57},"end":{"row":23,"column":0},"action":"remove","lines":["",""]},{"start":{"row":22,"column":58},"end":{"row":22,"column":65},"action":"remove","lines":["       "]},{"start":{"row":22,"column":58},"end":{"row":22,"column":59},"action":"insert","lines":["{"]},{"start":{"row":22,"column":60},"end":{"row":22,"column":68},"action":"remove","lines":["       {"]},{"start":{"row":22,"column":159},"end":{"row":22,"column":160},"action":"insert","lines":[" "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":12},"action":"remove","lines":["            "]}],[{"start":{"row":4,"column":17},"end":{"row":4,"column":26},"action":"remove","lines":["46.619261"],"id":7},{"start":{"row":4,"column":17},"end":{"row":4,"column":24},"action":"insert","lines":["51.5074"]}],[{"start":{"row":5,"column":17},"end":{"row":5,"column":27},"action":"remove","lines":["-33.134766"],"id":8},{"start":{"row":5,"column":17},"end":{"row":5,"column":23},"action":"insert","lines":["0.1278"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["1"],"id":9}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":16},"action":"remove","lines":["13"],"id":10},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["7"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["7"],"id":11}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["1"],"id":12},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["0"]}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"remove","lines":["0"],"id":13},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"remove","lines":["1"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["8"],"id":14}],[{"start":{"row":12,"column":10},"end":{"row":12,"column":11},"action":"insert","lines":["i"],"id":15},{"start":{"row":12,"column":11},"end":{"row":12,"column":12},"action":"insert","lines":["n"]},{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"insert","lines":["f"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["o"]},{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":[":"]}],[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":[" "],"id":16}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":[","],"id":17}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["M"],"id":18},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["a"]},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["i"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["n"]}],[{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":[" "],"id":19},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["O"]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["f"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["f"]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["i"]},{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"insert","lines":["c"]},{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["<"],"id":20},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":["b"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"insert","lines":["r"]},{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":[">"]}],[{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":["S"],"id":21},{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["t"]},{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"insert","lines":["r"]},{"start":{"row":12,"column":34},"end":{"row":12,"column":35},"action":"insert","lines":["a"]},{"start":{"row":12,"column":35},"end":{"row":12,"column":36},"action":"insert","lines":["t"]},{"start":{"row":12,"column":36},"end":{"row":12,"column":37},"action":"insert","lines":["f"]},{"start":{"row":12,"column":37},"end":{"row":12,"column":38},"action":"insert","lines":["o"]},{"start":{"row":12,"column":38},"end":{"row":12,"column":39},"action":"insert","lines":["r"]},{"start":{"row":12,"column":39},"end":{"row":12,"column":40},"action":"insert","lines":["d"]}],[{"start":{"row":12,"column":40},"end":{"row":12,"column":41},"action":"insert","lines":["<"],"id":22},{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"insert","lines":["b"]},{"start":{"row":12,"column":42},"end":{"row":12,"column":43},"action":"insert","lines":["r"]},{"start":{"row":12,"column":43},"end":{"row":12,"column":44},"action":"insert","lines":[">"]}],[{"start":{"row":12,"column":44},"end":{"row":12,"column":45},"action":"insert","lines":["L"],"id":23},{"start":{"row":12,"column":45},"end":{"row":12,"column":46},"action":"insert","lines":["o"]},{"start":{"row":12,"column":46},"end":{"row":12,"column":47},"action":"insert","lines":["n"]},{"start":{"row":12,"column":47},"end":{"row":12,"column":48},"action":"insert","lines":["d"]},{"start":{"row":12,"column":48},"end":{"row":12,"column":49},"action":"insert","lines":["o"]},{"start":{"row":12,"column":49},"end":{"row":12,"column":50},"action":"insert","lines":["n"]}],[{"start":{"row":13,"column":10},"end":{"row":13,"column":50},"action":"insert","lines":["info: Main Office<br>Stratford<br>London"],"id":24}],[{"start":{"row":13,"column":16},"end":{"row":13,"column":27},"action":"remove","lines":["Main Office"],"id":25},{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["W"]},{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["a"]},{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["r"]},{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["e"]},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["h"]},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["o"]},{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["u"]},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["s"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":29},"end":{"row":13,"column":38},"action":"remove","lines":["Stratford"],"id":26},{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":["M"]},{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"insert","lines":["a"]},{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["n"]},{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"insert","lines":["o"]},{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"insert","lines":["r"]}],[{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":[" "],"id":27},{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":["P"]},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["a"]},{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["r"]},{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["k"]}],[{"start":{"row":13,"column":49},"end":{"row":13,"column":50},"action":"insert","lines":[","],"id":28}],[{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"insert","lines":[" "],"id":29}],[{"start":{"row":12,"column":51},"end":{"row":12,"column":52},"action":"insert","lines":[" "],"id":32}],[{"start":{"row":12,"column":50},"end":{"row":12,"column":51},"action":"insert","lines":["'"],"id":33}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["'"],"id":34}],[{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["'"],"id":35}],[{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"insert","lines":["'"],"id":36}],[{"start":{"row":12,"column":28},"end":{"row":12,"column":51},"action":"remove","lines":["<br>Stratford<br>London"],"id":37}],[{"start":{"row":13,"column":26},"end":{"row":13,"column":50},"action":"remove","lines":["<br>Manor Park<br>London"],"id":38}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":26},"end":{"row":13,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1576333060455,"hash":"fcc913c7ca8c6d2e0f6757503d3b247ffdd9ea9b"}