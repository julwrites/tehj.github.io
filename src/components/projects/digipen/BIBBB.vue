<template>
  <div class="modal-thumbnail">
    <h2>BIBBB</h2>

    <img class="thumbnail" src="@/assets/images/projects/BIBBB_1.jpg" v-on:click="showModal()" />

    <Modal v-show="isModalVisible()" v-on:close="hideModal()">
      <div slot="header">BIBBB</div>

      <div slot="body">
        <p>A puzzle game where the player has to get the boxer from one end of the level to the other using only the boxes in that level</p>

        <h3>Developed tools for the team including:</h3>
        <ul>
          <li>Level Editor using a Prototype to clone from and place object instances.</li>
          <li>Undo and Redo functionalities using a Memento method save/restore.</li>
          <li>Visual Effects Programming including selection indicators, gravity and magnet forces.</li>
        </ul>

        <div class="gallery-container">
          <img class="gallery-img" src="@/assets/images/projects/BIBBB_1.jpg" />
          <img class="gallery-img" src="@/assets/images/projects/BIBBB_2.jpg" />
          <img class="gallery-img" src="@/assets/images/projects/BIBBB_3.jpg" />
          <img class="gallery-img" src="@/assets/images/projects/BIBBB_4.jpg" />
        </div>
      </div>

      <div slot="footer">
        <a href="http://games.digipen.edu/games/bibbb">
          <img class="footer-thumbnail" src="@/assets/images/projects/digipen.png" />
        </a>
      </div>
    </Modal>
  </div>
</template>

<script lang='ts'>
import { Component } from "vue-property-decorator";
import Modal from "@/components/common/Modal.vue";
import Project from "@/components/projects/common/Project.vue";

@Component({ components: { Modal } })
export default class BIBBB extends Project {}
</script>
