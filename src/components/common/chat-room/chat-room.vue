<template>
  <div class="chat-room">
    <div class="room-content">
      <div v-show="!headerShow" class="content-header">
        <div class="header-detail">
          <div class="detail-portrait">
            <img src="../../../../static/img/default-icon.png">
          </div>
          <div class="detail-title">
            <span class="title-username">用户名</span>
            <span class="title-login-status">[离线]</span>
          </div>
        </div>
        <div class="header-record" @click="showRecordEvent">
          <img src="../../../../static/img/recode.png">
          <p class="record-title">云记录</p>
        </div>
      </div>
      <div v-show="headerShow" class="content-header-hide">
        <button class="hide-button" @click="closeRecordEvent">返回</button>
        <p>云记录</p>
      </div>
      <section class="content-panel">
        <div v-show="!headerShow" class="panel-record">
          <p class="record-time">- - - - 10:06 - - - -</p>
          <div class="record-mine" v-for="(item,index) in messageArr" :key="index">
            <img src="../../../../static/img/default-icon.png">
            <p class="mine-message">{{item}}</p>
          </div>
          <p class="record-time">- - - - 11:06 - - - -</p>
          <div class="record-opposite">
            <img src="../../../../static/img/default-icon.png">
            <p class="opposite-message" >hello</p>
          </div>
        </div>
        <div v-show="headerShow" class="panel-history">
          <div class="history-more-records">
            <span>没有更早的聊天记录了</span>
          </div>
          <p class="history-time">- - - - 10:06 - - - -</p>
          <div class="history-mine">
            <img src="../../../../static/img/default-icon.png">
            <p class="mine-message">hello</p>
          </div>
          <div class="history-opposite">
            <img src="../../../../static/img/default-icon.png">
            <p class="opposite-message">hello</p>
          </div>
        </div>
      </section>

      <footer class="content-send">
        <div class="send-expression" @click.stop="ExpressionShowEvent">
          <div class="expression-package" v-show="expressionShow">
            <div class="package-content">
              <div class="content-emoji" :class="{Show:Index==0}">
                <span>
                  <img src="../../../../static/img/emoji/emoji_0.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_01.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_02.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_03.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_04.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_05.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_06.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_07.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_08.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_09.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_10.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_11.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_12.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_13.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_14.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_15.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_16.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_17.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_18.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_19.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_20.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_21.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_22.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_23.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_24.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_25.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_26.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_27.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_28.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_29.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_30.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_31.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_32.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_33.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_34.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_35.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_36.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_37.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_38.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_39.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_40.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_41.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_42.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_43.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_44.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_45.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_46.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_47.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_48.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_49.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_50.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_51.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_52.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_53.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_54.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_55.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_56.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_57.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_58.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_59.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_60.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_61.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_62.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_63.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_64.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_65.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_66.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_67.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_68.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_69.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_70.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_71.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_72.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_73.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_74.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_75.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_76.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_77.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_78.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_79.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_80.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_81.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_82.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_83.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_84.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_85.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_86.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_87.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_88.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_89.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_90.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_91.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_92.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_93.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_94.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_95.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_96.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_97.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_98.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_99.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_100.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_101.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_102.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_103.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_104.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_105.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_106.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_107.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_108.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_109.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_110.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_111.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_112.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_113.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_114.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_115.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_116.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_117.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_118.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_119.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_120.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_12.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_121.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_122.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_123.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_124.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_125.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_126.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_127.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_128.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_129.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_130.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_131.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_132.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_133.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_134.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_135.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_136.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_137.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_138.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_139.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_140.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_141.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_142.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_143.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_144.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_145.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_146.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_147.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_148.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_149.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_150.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_151.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_152.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_160.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_161.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_162.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_163.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_164.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_165.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_166.png">
                </span>
                <span>
                  <img src="../../../../static/img/emoji/emoji_200.png">
                </span>
              </div>
              <div class="content-chicken" :class="{Show:Index==1}">
                <span>
                  <img src="../../../../static/img/ajmd/ajmd001.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd002.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd003.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd004.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd005.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd006.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd007.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd008.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd009.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd010.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd011.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd012.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd013.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd014.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd015.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd016.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd017.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd018.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd019.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd020.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd021.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd022.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd023.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd024.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd025.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd026.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd027.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd028.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd029.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd030.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd031.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd032.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd033.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd034.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd035.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd036.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd037.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd038.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd039.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd040.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd041.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd042.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd043.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd044.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd045.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd046.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd047.png">
                </span>
                <span>
                  <img src="../../../../static/img/ajmd/ajmd048.png">
                </span>
              </div>
              <div class="content-bear" :class="{Show:Index==2}">
                <span>
                  <img src="../../../../static/img/xxy/xxy001.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy002.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy003.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy004.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy005.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy006.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy007.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy008.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy009.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy010.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy011.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy012.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy013.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy014.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy015.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy016.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy017.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy018.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy019.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy020.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy021.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy022.png">
                </span>

                <span>
                  <img src="../../../../static/img/xxy/xxy023.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy024.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy025.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy026.png">
                </span>

                <span>
                  <img src="../../../../static/img/xxy/xxy027.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy028.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy029.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy030.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy031.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy032.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy033.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy034.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy035.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy036.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy037.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy038.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy039.png">
                </span>
                <span>
                  <img src="../../../../static/img/xxy/xxy040.png">
                </span>
              </div>
              <div class="content-rabbit" :class="{Show:Index==3}">
                <span>
                  <img src="../../../../static/img/lt/lt001.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt002.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt003.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt004.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt005.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt006.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt007.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt008.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt009.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt010.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt011.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt012.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt013.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt014.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt015.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt016.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt017.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt018.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt019.png">
                </span>
                <span>
                  <img src="../../../../static/img/lt/lt020.png">
                </span>
              </div>
            </div>
            <div class="package-tab">
              <div class="tab-item" v-for="(item,index) in tabArr" :key="index" :class="{tabItemClick:index==Index}" @click="tabClickEvent(index)">
                <img :src="item.tabSrc">
              </div>
            </div>
          </div>
        </div>
        <div class="send-picture">

        </div>
        <div class="send-telephone" @click="videoSelectEvent">

        </div>
        <div class="send-video" @click="videoSelectEvent">

        </div>
        <div class="send-message">
          <textarea v-model="messageText" class="message-text" name="message" id="message" rows="1" maxlength="500" @click.stop="clickEvent"></textarea>
          <ul v-show="markedShow" class="message-marked-list">
            <li class="item" v-for="(item,index) in markedArr" :key="index" @click.stop="getMarkedValueEvent(item)">{{item}}</li>
          </ul>
        </div>
        <button class="send-button" @click="sendButtonEvent">发送</button>
        <selectTechnology v-show="videoSelectShow" @closeSelectEvent="closeSelect" :videoSelectShow="videoSelectShow"></selectTechnology>
      </footer>
    </div>
    <div class="room-reports">
      <div class="reports-header">
        <p>借条大师信息报告</p>
      </div>
      <div class="reports-content">

      </div>
      <div class="reports-footer">
        <p>最长逾期时间为天</p>
      </div>
    </div>
  </div>
</template>
<script>
  import selectTechnology from '@/components/common/select-technology/select-technology.vue'
  export default {
    data() {
      return {
        headerShow: false,
        videoSelectShow: false,
        markedShow: false,
        messageText: '',
        expressionShow: false,
        markedArr: ['你好，在吗', '有什么事吗', '晚安', '再见', '拜拜', '很高兴认识你呢', '吃饭了吗', '你在干什么呢'],
        Index: 0,
        tabArr: [{
            tabSrc: '../../../../static/img/emoji_0.png'
          },
          {
            tabSrc: '../../../../static/img/ajmd001.png'
          },
          {
            tabSrc: '../../../../static/img/xxy001.png'
          },
          {
            tabSrc: '../../../../static/img/lt001.png'
          }
        ],
        messageArr:['hello'],
      }
    },
    mounted() {
      document.addEventListener('click', this.EverySpaceClickEvent);
    },
    destroyed() {
      document.removeEventListener('click', this.EverySpaceClickEvent)
    },
    methods: {
      showRecordEvent() {
        this.headerShow = true;
      },
      closeRecordEvent() {
        this.headerShow = false;
      },
      videoSelectEvent() {
        this.videoSelectShow = true;
      },
      closeSelect() {
        this.videoSelectShow = false;
      },
      blurEvent() {
        this.markedShow = false;
      },
      clickEvent() {
        this.markedShow = !this.markedShow;
      },
      tabClickEvent(index) {
        this.Index = index;
      },
      ExpressionShowEvent() {
        this.expressionShow = true;
      },
      EverySpaceClickEvent() {
        this.expressionShow = false;
        this.markedShow = false;
      },
      getMarkedValueEvent(item) {
        this.messageText = item;
        this.markedShow = false;
      },
      sendButtonEvent(){
        if(this.messageText == '') return;
        if(this.messageText != ''){
          // this.messageArr.push(this.messageText);
        }
      }
    },
    components: {
      selectTechnology
    }
  }

</script>

<style scoped lang="scss">
  @import '../../scss/chat-room/chat-room.scss';

</style>
