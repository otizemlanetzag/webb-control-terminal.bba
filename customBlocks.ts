import * as Blockly from 'blockly/core';

// 1. בלוק טריגר: כאשר מחובר מכשיר USB (בלוק עוטף)
Blockly.Blocks['trigger_usb_connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🔌 כאשר מחובר מכשיר USB");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("בצע");
    this.setColour(120); // צבע ירוק לטריגרים
    this.setTooltip("מזהה חיבור של התקן חיצוני ומריץ את הפעולות בפנים");
  }
};

// 2. בלוק פעולה: נגן צליל
Blockly.Blocks['action_play_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🎵 נגן צליל מכתובת URL:")
        .appendField(new Blockly.FieldTextInput("https://example.com"), "SOUND_URL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230); // צבע כחול למדיה
  }
};

// 3. בלוק פעולה: הרץ קוד HTML
Blockly.Blocks['action_run_html'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("💻 הרץ קוד (HTML/JS)");
    this.appendValueInput("CODE")
        .setCheck("String")
        .appendField("טקסט הקוד:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290); // צבע סגול לקוד
  }
};
