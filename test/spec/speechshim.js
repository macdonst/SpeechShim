describe("W3C Speech API", function() {
  describe("SpeechRecogntion API", function() {
    describe("SpeechRecognition", function() {
      it("should exist", function() {
        expect(SpeechRecognition).toBeDefined();
      });

      it("should be able to instantiate", function() {
        var rec = new SpeechRecognition();
        expect(rec).toBeDefined();
      });

      it("should have correct properties", function() {
        var rec = new SpeechRecognition();
        expect(rec.grammars).toBeDefined();
        expect(rec.lang).toBeDefined();
        expect(rec.continuous).toBeDefined();
        expect(rec.interimResults).toBeDefined();
        expect(rec.maxAlternatives).toBeDefined();
        //expect(rec.serviceURI).toBeDefined();
      });

      it("should have start method", function() {
        var rec = new SpeechRecognition();
        expect(rec.start).toBeDefined()
        expect(typeof rec.start).toBe("function");
      });

      it("should have stop method", function() {
        var rec = new SpeechRecognition();
        expect(rec.stop).toBeDefined()
        expect(typeof rec.stop).toBe("function");
      });

      it("should have abort method", function() {
        var rec = new SpeechRecognition();
        expect(rec.abort).toBeDefined()
        expect(typeof rec.abort).toBe("function");
      });
    });

    describe("SpeechRecognitionError", function() {
      it("should have SpeechRecognitionError", function() {
        expect(SpeechRecognitionError).toBeDefined();
      });

      it("should have correct properties", function() {
        var e = new SpeechRecognitionError("no-speech", "message");
        expect(e.error).toBeDefined();
        expect(e.message).toBeDefined();
      });
    });

    describe("SpeechRecognitionEvent", function() {
      it("should have SpeechRecognitionEvent", function() {
        expect(SpeechRecognitionEvent).toBeDefined();
      });

      it("should have correct properties", function() {
        var evt = new SpeechRecognitionEvent("","","","");
        expect(evt.resultIndex).toBeDefined();
        expect(evt.results).toBeDefined();
        expect(evt.interpretation).toBeDefined();
        expect(evt.emma).toBeDefined();
      });
    });

    describe("SpeechGrammar", function() {
      it("should have SpeechGrammar", function() {
        expect(SpeechGrammar).toBeDefined();
      });

      it("should have correct properties", function() {
        var grammar = new SpeechGrammar("", "");
        expect(grammar.src).toBeDefined();
        expect(grammar.weight).toBeDefined();
      });
    });

    describe("SpeechGrammarList", function() {
      it("should have SpeechGrammarList", function() {
        expect(SpeechGrammarList).toBeDefined();
      });

      it("should have correct properties", function() {
        var list = new SpeechGrammarList("");
        expect(list.length).toBeDefined();
      });

      it("should have item method", function() {
        var list = new SpeechGrammarList("");
        expect(list.item).toBeDefined()
        expect(typeof list.item).toBe("function");
      });

      it("should have addFromUri method", function() {
        var list = new SpeechGrammarList("");
        expect(list.addFromUri).toBeDefined()
        expect(typeof list.addFromURI).toBe("function");
      });

      it("should have addFromString method", function() {
        var list = new SpeechGrammarList("");
        expect(list.addFromString).toBeDefined()
        expect(typeof list.addFromString).toBe("function");
      });
    });
  });

  describe("SpeechSynthesis API", function() {
    describe("SpeechSynthesis", function() {
      it("should exist", function() {

        /* */
     var u = new SpeechSynthesisUtterance();
     u.text = 'This is a longer text';
     u.lang = 'en-US';
     u.rate = 1.2;
     u.onend = function(event) { alert('Finished in ' + event.elapsedTime + ' seconds.'); }
     speechSynthesis.speak(u);
     /* */

        expect(window.speechSynthesis).toBeDefined();
      });

      it("should have correct properties", function() {
        expect(window.speechSynthesis.pending).toBeDefined();
        expect(window.speechSynthesis.speaking).toBeDefined();
        expect(window.speechSynthesis.paused).toBeDefined();
      });

      it("should have speak method", function() {
        expect(window.speechSynthesis.speak).toBeDefined();
        expect(typeof window.speechSynthesis.speak).toBe("function");
      });

      it("should have cancel method", function() {
        expect(window.speechSynthesis.cancel).toBeDefined();
        expect(typeof window.speechSynthesis.cancel).toBe("function");
      });

      it("should have pause method", function() {
        expect(window.speechSynthesis.pause).toBeDefined();
        expect(typeof window.speechSynthesis.pause).toBe("function");
      });

      it("should have resume method", function() {
        expect(window.speechSynthesis.resume).toBeDefined();
        expect(typeof window.speechSynthesis.resume).toBe("function");
      });

      it("should have getVoices method", function() {
        expect(window.speechSynthesis.getVoices).toBeDefined();
        expect(typeof window.speechSynthesis.getVoices).toBe("function");
      });

      it("getVoices should have at least one voice", function() {
        var list = window.speechSynthesis.getVoices();
        expect(list.length, 1);
        expect(list.item(0).lang, "en");
      });
    });

    describe("SpeechSynthesisUtterance", function() {
      it("should exist", function() {
        expect(SpeechSynthesisUtterance).toBeDefined();
      });

      it("should have correct properties", function() {
        var utterance = new SpeechSynthesisUtterance();
        expect(utterance.text).toBeDefined();
        expect(utterance.lang).toBeDefined();
        expect(utterance.voiceURI).toBeDefined();
        expect(utterance.volume).toBeDefined();
        expect(utterance.rate).toBeDefined();
        expect(utterance.pitch).toBeDefined();
      });
    });

    describe("SpeechSynthesisEvent", function() {
      it("should exist", function() {
        expect(SpeechSynthesisEvent).toBeDefined();
      });

      it("should have correct properties", function() {
        var evt = new SpeechSynthesisEvent();
        expect(evt.charIndex).toBeDefined();
        expect(evt.elapsedTime).toBeDefined();
        expect(evt.name).toBeDefined();
      });
    });

    describe("SpeechSynthesisVoice", function() {
      it("should exist", function() {
        expect(SpeechSynthesisVoice).toBeDefined();
      });

      it("should have correct properties", function() {
        var voice = new SpeechSynthesisVoice();
        expect(voice.voiceURI).toBeDefined();
        expect(voice.name).toBeDefined();
        expect(voice.lang).toBeDefined();
        expect(voice.localService).toBeDefined();
        expect(voice.default).toBeDefined();
      });
    });

    describe("SpeechSynthesisVoiceList", function() {
      it("should exist", function() {
        expect(SpeechSynthesisVoiceList).toBeDefined();
      });

      it("should have correct properties", function() {
        var list = new SpeechSynthesisVoiceList();
        expect(list.length).toBeDefined();
      });

      it("should have item method", function() {
        var list = new SpeechSynthesisVoiceList();
        expect(list.item).toBeDefined();
        expect(typeof list.item).toBe("function");
      });
    });
  });  

});