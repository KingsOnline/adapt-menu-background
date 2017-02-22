adapt-block-swap
===============

An extension that allows for the swapping of left and right layouts of components within a block.

**NOTE:** This feature has now become a part of the core Adapt Framework as of v2.0.9 See [here](https://github.com/adaptlearning/adapt_framework/blob/fdf2840953274de6167a2cd360db23ad3f6c8d16/src/core/js/models/adaptModel.js#L231) for the attribute name. I will maintain this extension for legacy projects and until this feature gets added to the Authoring Tool.

Motive
------------

When designing a page that uses two or more simultaneous blocks containign two half width components a designer two choices on how to lay them out. For a point of refrence let's call them **alligned** and **alternate**. 



        Alternate - Desktop:
        -------
        TEXT            GRAPHIC
        GRAPHIC         TEXT
        TEXT            GRAPHIC
        
It's clear that the alternate is a visually appealing approach. It breaks up the text and graphic nicely so that the learner can appreciate the whole page, and the learner knows that the graphic applies to the text component next to it.

        Alternate - Mobile:
        -------
        TEXT GRAPHIC GRAPHIC TEXT TEXT GRAPHIC

However for a learner on mobile this ordering now makes no sense as there is no consistent way to understand which text relates to which graphic.

We Can fix this problem by making the text and graphic to always appear in the same collumn. In **alligned** view.

        Aligned - Desktop: 
        -------
        TEXT            GRAPHIC
        TEXT            GRAPHIC
        TEXT            GRAPHIC

        Alternate - Mobile:
        -------
        TEXT GRAPHIC TEXT GRAPHIC TEXT GRAPHIC

This solution solves the issue of consistency on mobile. However it gets boring for learners on desktop who have to look at the same text graphic layout.

Solution
--------

This extension seeks to solve this problem by allowing the designer to script using the alternate method. But when accesed on a mobile device, swap the layout to that of the 'aligned' layout so that it makes sense.

Installation
------------

