# CSS Gauges #

Easy CSS semi-circle gauges with Javascript optional.

For examples, see [example.html](example.html).


## Examples ##

![alt text](https://withaspark.com/misc/cssgauges_ss.png "Screenshot")

## Usage ##

### Gauges using JQuery ###

For less markup and greater customization, use with jQuery. Include some version of the jQuery library (I haven't tested compatibility with all versions yet). In the future, I think I'll remove the dependency on jQuery and rewrite with Javascript only, but until then...

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<link href="gauges.css" rel="stylesheet" type="text/css">
<script src="gauges.min.js"></script>
```

and create your markup with a class of ```gauge``` and specify at least the ```data-value``` attribute.

```
<span class="gauge" data-value="40"></span>
```

This will create a default styled 40% filled gauge.

### Gauges using only CSS ###

Simply include the stylesheet

```
<link href="gauges.css" rel="stylesheet" type="text/css">
```

and create your markup with a class of ```gauge-<percentFilled>``` where ```<percentFilled>``` is the percentage of the gauge to fill. For example, a 40% filled gauge is created with the following markup:

```
<span class="gauge gauge-40">
   <div class="outer">
      <div class="inner"></div>
      <div class="cover"></div>
      <div class="value">40%</div>
   </div>
</span>
```

For now, I only added transforms for 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 percent--feel free to add intermediate values to [gauges.css](gauges.css).

## Options ##

Attribute|Type|Use
---------|----|---
```data-value```|```float```|Value of fill. Required.
```data-animate```|```int|bool```|Whether the gauge should be animated and "dial up" to position. Accepts ```true```, ```false```, ```1```, ```0```. Optional. Default, ```0``` no animation.
```data-bgcolor```|```string```|Color of the gauge background. Optional. Default, the ```background-color``` specified in css or inline for this ```gauge``` element, ```#fff```.
```data-color```|```string```|Color of the gauge and value. Optional. Default, the ```color``` specified in css or inline for this ```gauge``` element, ```#8cc```.
```data-max```|```float```|Value that results in gauge completely filled. Optional. Default, ```100```.
```data-min```|```float```|Value that results in gauge completely unfilled. Optional. Default, ```0```.
```data-notext```|```int|bool```|Whether the value should be hidden within the gauge. Accepts ```true```, ```false```, ```1```, ```0```. Optional. Default, ```0``` not hidden/value is displayed.
```data-radius```|```int```|Radius of gauge in pixels. Optional. Default, double the ```height``` specified in css or inline for this ```gauge``` element, ```100px```.
```data-thickness```|```int```|Thickness of gauge in pixels. Optional. Default, one-fifth the ```height``` specified in css or inline for this ```gauge``` element, ```10px```.
```data-units```|```string```|Units of ```data-value```. Optional. Default, ```%```.

## Browser Support ##

Supported by the following browser versions:

Browser|Version
-------|-------
Chrome|4.0+
Internet Explorer|9.0+
Firefox|3.5+
Safari|3.2+
Opera|15.0+

## License ##

Please feel free to use in your projects (personal and commercial) under the terms of the [MIT License](LICENSE). Pull requests greatly appreciated!
