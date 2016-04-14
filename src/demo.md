---
layout: chapter
book: Lorem Ipsum
chapter: chapter13
chapter-title: Chapter Title
ordinal: 13
permalink: /demo/
css: demo
data: [editions, glossary]
---

<p>
  <span class="pagebreak">
    <a epub:type="pagebreak" tabindex="0" role="button" class="ed-full2 ed-fulld" id="page432" data-toggle="popover">432</a>
  </span>
  <a tabindex="0" role="button" class="term term-genre" data-toggle="popover" title="Lorem ipsum"><dfn>Lorem ipsum</dfn></a> dolor sit amet, consectetur adipiscing elit. Vivamus ornare odio arcu, non tincidunt nisl feugiat vel. Quisque cursus sit amet tortor et fringilla. Aenean sed magna et ex fermentum hendrerit in sed elit. Nam cursus eros vel purus rutrum, et dictum erat lacinia.
</p>

<section epub:type="subchapter">
  <h3 epub:type="title">
    Chapter Subsection
    <span epub:type="ordinal">1</span>
  </h3>
  <p>
    Nunc quis sem a nibh porttitor sollicitudin id id velit. Aenean fermentum nec turpis vitae tempor. Quisque sem purus, fringilla et tempor sit amet, vulputate sed sem. Integer sed nibh vehicula nibh convallis imperdiet a vel sem. Vestibulum feugiat varius lectus. Vivamus feugiat dapibus <a tabindex="0" role="button" class="term term-genre" data-toggle="popover" title="Turpis"><dfn>turpis</dfn></a> vel vulputate. Aliquam non nibh euismod, tristique ligula eu, rhoncus libero. Curabitur in nunc eget nisi fermentum volutpat a non nisi.
  </p>

  <!-- Photoswipe gallery -->
  {% include pswp-gallery.html id="01" chapter=page.chapter %}

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare odio arcu, non tincidunt nisl feugiat vel. Quisque cursus sit amet tortor et fringilla. Aenean sed magna et ex fermentum hendrerit in sed elit. Nam cursus eros vel purus rutrum, et dictum erat lacinia. Nunc quis sem a nibh porttitor sollicitudin id id velit. Aenean fermentum nec turpis vitae tempor. Quisque sem purus, fringilla et tempor sit amet, vulputate sed sem. Integer sed nibh vehicula nibh convallis imperdiet a vel sem. Vestibulum feugiat varius lectus.
  </p>
</section>

<section epub:type="subchapter">
  <h3 epub:type="title">
    Chapter Subsection
    <span epub:type="ordinal">2</span>
  </h3>
  <p>
    Vivamus feugiat dapibus turpis vel vulputate. Aliquam non nibh euismod, tristique ligula eu, rhoncus libero. Curabitur in nunc eget nisi fermentum volutpat a non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  <p>
    Vivamus ornare odio arcu, non tincidunt nisl feugiat vel. Quisque cursus sit amet tortor et fringilla. Aenean sed magna et ex fermentum hendrerit in sed elit. Nam cursus eros vel purus rutrum, et dictum erat lacinia. Nunc quis sem a nibh porttitor sollicitudin id id velit. Aenean fermentum nec turpis vitae tempor. Quisque sem purus, fringilla et tempor sit amet, vulputate sed sem. Integer sed nibh vehicula nibh convallis imperdiet a vel sem. Vestibulum feugiat varius lectus. Vivamus feugiat dapibus turpis vel vulputate. Aliquam non nibh euismod, tristique ligula eu, rhoncus libero. Curabitur in nunc eget nisi fermentum volutpat a non nisi.
  </p>

  <div class="pagebreak">
    <a tabindex="0" class="ed-full1 ed-fulla" epub:type="pagebreak" id="page546" role="button" data-toggle="popover">546</a>
    <a tabindex="0" class="ed-mauth ed-short" epub:type="pagebreak" id="page257" role="button" data-toggle="popover">257</a>
  </div>

  <button type="button" class="btn btn-default center-block" data-toggle="modal" data-target="#timelineModal">
    View Timeline
  </button>

  <div class="modal" id="timelineModal" tabindex="-1" role="dialog" aria-labelledby="timelineLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="timelineLabel">Timeline</h4>
        </div>
        <table class="modal-body table table-bordered table-scroll">
          <thead>
            <tr>
              <th>Texts</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td><b>1485</b> Accession of Henry VII inaugurates Tudor dynasty</td>
            </tr>
            <tr>
              <td></td>
              <td><b>ca. 1504</b> Leonardo da Vinci paints the Mona Lisa</td>
            </tr>
            <tr>
              <td><b>ca. 1505-07</b> Amerigo Vespucci, <i>New World</i> and <i>Four Voyages</i></td>
              <td><b>1508-12</b> Michaelangelo paints Sistine Chapel ceiling</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1509</b> Death of Henry VII; accession of Henry VIII</td>
            </tr>
            <tr>
              <td><b>1511</b> Desiderius Erasmus, <i>Praise of Folly</i></td>
              <td><b>1513</b> James IV of Scotland killed at Battle of Flodden; succeeded by James V</td>
            </tr>
            <tr>
              <td><b>1516</b> Thomas More, <i>Utopia</i>. Ludovico Ariosto, <i>Orlando Furioso</i></td>
              <td><b>1517</b> Martin Luther's Ninety-Five Theses; beginning of the Reformation in Germany</td>
            </tr>
            <tr>
              <td><b>ca. 1517</b> John Skelton, "The Tunning of Elinour Rumming"</td>
              <td><b>1519</b> Cortés invades Mexico. Magellan begins his voyage around the world</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1521</b> Pope Leo X names Henry VIII "Defender of the Faith"</td>
            </tr>
            <tr>
              <td><b>1520s-30s</b> Thomas Wyatt's poems circulating in manuscript</td>
              <td></td>
            </tr>
            <tr>
              <td><b>1525</b> William Tyndale's English translation of the <i>New Testament</i></td>
              <td></td>
            </tr>
            <tr>
              <td><b>1528</b> Baldassare Castiglione, <i>The Courtier</i></td>
              <td><b>1529-32</b> More is Lord Chancellor</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1532-34</b> Henry VIII divorces Catherine of Aragon to marry Anne Boleyn; Elizabeth I born; Henry declares himself head of the Church of England</td>
            </tr>
            <tr>
              <td><b>1532</b> Niccol&#242; Machiavelli, <i>The Prince</i> (written 1513)</td>
              <td><b>1535</b> More beheaded</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1537</b> Establishment of Calvin's theocracy at Geneva</td>
            </tr>
            <tr>
              <td><b>1537</b> John Calvin, <i>The Institution of Christian Religion</i></td>
              <td><b>1542</b> Roman Inquisition. James V of Scotland dies; succeeded by infant daughter, Mary</td>
            </tr>
            <tr>
              <td><b>1543</b> Copernicus, <i>On the Revolution of the Spheres</i></td>
              <td><b>1547</b> Death of Henry VIII; accession of Protestant Edward VI</td>
            </tr>
            <tr>
              <td><b>1547</b> <i>Book of Homilies</i></td>
              <td></td>
            </tr>
            <tr>
              <td><b>1549</b> <i>Book of Common Prayer</i></td>
              <td><b>1553</b> Death of Edward VI; failed attempt to put Protestant Lady Jane Grey on throne; accession of Catholic Queen Mary, daughter of Catherine of Aragon</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1555-56</b> Archbishop Cranmer and former bishops Latimer and Ridley burned at the stake</td>
            </tr>
            <tr>
              <td><b>1557</b> Tottel's <i>Songs and Sonnets</i> (printing poems by Wyatt, Surrey, and others)</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td><b>1558</b> Mary dies; succeeded by Protestant Elizabeth I</td>
            </tr>
            <tr>
              <td><b>1563</b> John Foxe, <i>Acts and Monuments</i></td>
              <td></td>
            </tr>
            <tr>
              <td><b>1565</b> Thomas Norton and Thomas Sackville, <i>Gorboduc</i>, first English blank-verse tragedy (acted in 1561)</td>
              <td></td>
            </tr>
            <tr>
              <td><b>1567</b> Arthur Golding, translation of Ovid's <i>Metamorphoses</i></td>
              <td><b>1567-68</b> Mary, Queen of Scots, forced to abdicate; succeeded by her son James VI; Mary imprisoned in England</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1570</b> Elizabeth I excommunicated by Pope Pius V</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1572</b> St. Bartholomew's Day Massacre of French Protestants</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1576</b> James Burbage's play house, The Theater, built in London</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1577-80</b> Drake's circumnavigation of the globe</td>
            </tr>
            <tr>
              <td><b>1578</b> John Lyly, <i>Euphues</i></td>
              <td></td>
            </tr>
            <tr>
              <td><b>1579</b> Edmund Spenser, <i>The Shepheardes Calender</i></td>
              <td></td>
            </tr>
            <tr>
              <td><b>1580</b> Montaigne, <i>Essais</i></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td><b>1583</b> Irish rebellion crushed</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1584-87</b> Sir Walter Raleigh's earliest attempts to colonize Virginia</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1586-87</b> Mary, Queen of Scots, tried for treason and executed</td>
            </tr>
            <tr>
              <td><b>ca. 1587-90</b> Marlowe's <i>Tamburlaine</i> acted. Shakespeare begins career as actor and playwright</td>
              <td></td>
            </tr>
            <tr>
              <td><b>1588</b> Thomas Hariot, <i>A Brief and True Report of . . . Virginia</i></td>
              <td><b>1588</b> Failed invasion of the Spanish Armada</td>
            </tr>
            <tr>
              <td><b>1589</b> Richard Hakluyt, <i>The Principal Navigations . . . of the English Nation</i></td>
              <td></td>
            </tr>
            <tr>
              <td><b>1590</b> Sir Philip Sidney, <i>Arcadia</i> (posthumously published); Spenser, <i>The Faerie Queene</i>, Books 1-3</td>
              <td></td>
            </tr>
            <tr>
              <td><b>1591</b> Sidney, <i>Astrophil and Stella</i> published</td>
              <td></td>
            </tr>
            <tr>
              <td><b>ca. 1592</b> John Donne's earliest poems circulating in manuscript</td>
              <td></td>
            </tr>
            <tr>
              <td><b>1595</b> Sidney, <i>The Defense of Poesy</i> published</td>
              <td><b>1595</b> Ralegh's voyage to Guiana</td>
            </tr>
            <tr>
              <td><b>1596</b> Spenser, <i>The Faerie Queene</i>, Books 4-6 (with Books 1-3)</td>
              <td></td>
            </tr>
            <tr>
              <td><b>1598</b> Ben Jonson, <i>Every Man in His Humor</i></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td><b>1599</b> Globe Theater opens</td>
            </tr>
            <tr>
              <td></td>
              <td><b>1603</b> Elizabeth I dies; succeeded by James VI of Scotland (as James I), inaugurating the Stuart dynasty</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare odio arcu, non tincidunt nisl feugiat vel. Quisque cursus sit amet <a tabindex="0" role="button" class="term term-genre" data-toggle="popover" title="Tortor"><dfn>tortor</dfn></a> et fringilla. Aenean sed magna et ex fermentum hendrerit in sed elit. Nam cursus eros vel purus rutrum, et dictum erat lacinia. Nunc quis sem a nibh porttitor sollicitudin id id velit. Aenean fermentum nec turpis vitae tempor. Quisque sem purus, fringilla et tempor sit amet, vulputate sed sem. Integer sed nibh vehicula nibh convallis imperdiet a vel sem. Vestibulum feugiat varius lectus. Vivamus feugiat dapibus turpis vel vulputate. Aliquam non nibh euismod, tristique ligula eu, rhoncus libero. Curabitur in nunc eget nisi fermentum volutpat a non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare odio arcu, non tincidunt nisl feugiat vel.
  </p>
</section>
<section epub:type="subchapter">
  <h3 epub:type="title">
    Chapter Subsection
    <span epub:type="ordinal">3</span>
  </h3>
  <p>
    Quisque cursus sit amet tortor et fringilla. Aenean sed magna et ex fermentum hendrerit in sed elit. Nam cursus eros vel purus rutrum, et dictum erat lacinia. Nunc quis sem a nibh porttitor sollicitudin id id velit. Aenean fermentum nec turpis vitae tempor. Quisque sem purus, fringilla et tempor sit amet, vulputate sed sem. Integer sed nibh vehicula nibh convallis imperdiet a vel sem. Vestibulum feugiat varius lectus. Vivamus feugiat dapibus turpis vel vulputate. Aliquam non nibh euismod, tristique ligula eu, rhoncus libero. Curabitur in nunc eget nisi fermentum volutpat a non nisi.
  </p>  
  
  {% include pswp-gallery.html id="02" chapter=page.chapter %}

  <p>
    Nunc quis sem a nibh porttitor sollicitudin id id velit. Aenean fermentum nec turpis vitae tempor. Quisque sem purus, fringilla et tempor sit amet, vulputate sed sem. Integer sed nibh vehicula nibh convallis imperdiet a vel sem. Vestibulum feugiat varius lectus. Vivamus feugiat dapibus turpis vel vulputate. Aliquam non nibh euismod, tristique ligula eu, rhoncus libero. Curabitur in nunc eget nisi fermentum volutpat a non nisi.
  </p>
</section>

<section epub:type="subchapter">
  <h3 epub:type="title">
    Chapter Subsection
    <span epub:type="ordinal">4</span>
  </h3>

  <div class="pagebreak">
    <a tabindex="0" class="ed-fullc ed-mauth1" epub:type="pagebreak" id="page324" role="button" data-toggle="popover">324</a>
  </div>
  <article class="verse">
    <h3 class="verse-title">As You Like It <small>Excerpt</small></h3>
    <h4 class="scene-number">1.3</h4>
    <em class="stage-direction">Enter <span class="verse-character">Celia</span> and <span class="verse-character">Rosalind</span>.</em>
    <section>
      <h5 class="verse-character">Celia</h5>
      <p>
        <span class="verse-line">Why cousin, why Rosalind—Cupid have mercy! Not a </span>
        <span class="verse-line">word?</span>
      </p>
    </section>
    <section>
      <h5 class="verse-character">Rosalind</h5>
      <p class="verse-line">Not one to throw at a dog.</p>
    </section>
    <section>
      <h5 class="verse-character">Celia</h5>
      <p>
        <span class="verse-line">No, thy words are too precious to be cast away upon </span>
        <span class="verse-line" data-lineNum="5" aria-label="line 5">curs. Throw some of them at me; come, lame me with </span>
        <span class="verse-line">reasons.</span>
      </p>
    </section>
    <section>
      <h5 class="verse-character">Rosalind</h5>
      <p>
        <span class="verse-line">Then there were two cousins laid up, when the </span>
        <span class="verse-line">one should be lamed with reasons and the other mad with-</span>
        <span class="verse-line">out any.</span>
      </p>
    </section>
    <section>
      <h5 class="verse-character">Celia</h5>
      <p class="verse-line" data-lineNum="10" aria-label="line 10">
        But is all this for your father?
      </p>
    </section>
    <section>
      <h5 class="verse-character">Rosalind</h5>
      <p>
        <span class="verse-line">No, some of it is for my child’s father. Oh, how </span>
        <span class="verse-line">full of briars is this working-day world!</span>
      </p>
    </section>
    <section>
      <h5 class="verse-character">Celia</h5>
      <p>
        <span class="verse-line">They are but burrs, cousin, thrown upon thee in holi-</span>
        <span class="verse-line">day foolery; if we walk not in the trodden paths our very </span>
        <span class="verse-line" data-lineNum="15" aria-label="line 15">petticoats will catch them.</span>
      </p>
    </section>
  </article>


  <div class="pagebreak">
    <a tabindex="0" class="ed-short" epub:type="pagebreak" id="page32" role="button" data-toggle="popover">32</a>
  </div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare odio arcu, non tincidunt nisl feugiat vel. Quisque cursus sit amet tortor et fringilla. Aenean sed magna et ex fermentum hendrerit in sed elit. Nam cursus eros vel purus rutrum, et dictum erat lacinia. Nunc quis sem a nibh porttitor sollicitudin id id velit. Aenean fermentum nec turpis vitae tempor. Quisque sem purus, fringilla et tempor sit amet, vulputate sed sem. Integer sed nibh vehicula nibh convallis imperdiet a vel sem. Vestibulum feugiat varius lectus. Vivamus feugiat dapibus turpis vel vulputate. Aliquam non nibh euismod, tristique ligula eu, rhoncus libero. Curabitur in nunc eget nisi fermentum volutpat a non nisi.
  </p>
</section>

<section epub:type="subchapter">
  <h3 epub:type="title">
    Chapter Subsection
    <span epub:type="ordinal">5</span>
  </h3>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare odio arcu, non tincidunt nisl feugiat vel. Quisque cursus sit amet tortor et fringilla. Aenean sed magna et ex fermentum hendrerit in sed elit. Nam cursus eros vel purus rutrum, et dictum erat lacinia. Nunc quis sem a nibh porttitor sollicitudin <a tabindex="0" role="button" class="term term-genre" data-toggle="popover" title="Id"><dfn>id</dfn></a> id velit. Aenean fermentum nec turpis vitae tempor. Quisque sem purus, fringilla et tempor sit amet, vulputate sed sem. Integer sed nibh vehicula nibh convallis imperdiet a vel sem. Vestibulum feugiat varius lectus. Vivamus feugiat dapibus turpis vel vulputate. Aliquam non nibh euismod, tristique ligula eu, rhoncus libero. Curabitur in nunc eget nisi fermentum volutpat a non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare odio arcu, non tincidunt nisl feugiat vel. Quisque cursus sit amet tortor et fringilla. Aenean sed magna et ex fermentum hendrerit in sed elit. Nam cursus eros vel purus rutrum, et dictum erat lacinia. Nunc quis sem a nibh porttitor sollicitudin id id velit. Aenean fermentum nec turpis vitae tempor. Quisque sem purus, fringilla et tempor sit amet, vulputate sed sem. Integer sed nibh vehicula nibh convallis imperdiet a vel sem. Vestibulum feugiat varius lectus. Vivamus feugiat dapibus turpis vel vulputate. Aliquam non nibh euismod, tristique ligula eu, rhoncus libero. Curabitur in nunc eget nisi fermentum volutpat a non nisi.
    <span class="pagebreak">
      <a tabindex="0" class="ed-fulld" epub:type="pagebreak" id="page44" role="button" data-toggle="popover">44</a>
      <a tabindex="0" class="ed-mauth ed-mauth1" epub:type="pagebreak" id="page765" role="button" data-toggle="popover">765</a>
    </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare odio arcu, non tincidunt nisl feugiat vel. Quisque cursus sit amet tortor et fringilla. Aenean sed magna et ex fermentum hendrerit in sed elit. Nam cursus eros vel purus rutrum, et dictum erat lacinia.
  </p>
</section>