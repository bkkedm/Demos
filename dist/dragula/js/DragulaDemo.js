/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.7.0
 */
Bridge.assembly("DragulaDemo", function ($asm, globals) {
    "use strict";

    Bridge.define("DragulaDemo.App", {
        main: function Main () {
            // Dragula library is accessed via Global variables,
            // see "loader" setting in bridge.json file.

            DragulaDemo.App.ConfigureExample1();
            DragulaDemo.App.ConfigureExample2();
            DragulaDemo.App.ConfigureExample3();
            DragulaDemo.App.ConfigureExample4();
            DragulaDemo.App.ConfigureExample5();
            DragulaDemo.App.ConfigureExample6();
            DragulaDemo.App.ConfigureExample7();
            DragulaDemo.App.ConfigureExample8();
        },
        statics: {
            methods: {
                ConfigureExample1: function () {
                    dragula(System.Array.init([document.getElementById("left-defaults"), document.getElementById("right-defaults")], Element));
                },
                ConfigureExample2: function () {
                    var drake = dragula(System.Array.init([document.getElementById("left-events"), document.getElementById("right-events")], Element));

                    drake.on("drag", function (el) {
                        el.className = System.String.replaceAll(el.className, "ex-moved", "");
                    });

                    drake.on("drop", function (el) {
                        el.className = (el.className || "") + " ex-moved";
                    });

                    drake.on("over", function (el, container) {
                        container.className = (container.className || "") + " ex-over";
                    });

                    drake.on("out", function (el, container) {
                        container.className = System.String.replaceAll(container.className, "ex-over", "");
                    });
                },
                ConfigureExample3: function () {
                    dragula(System.Array.init([document.getElementById("left-rm-spill"), document.getElementById("right-rm-spill")], Element), { removeOnSpill: true });
                },
                ConfigureExample4: function () {
                    dragula(System.Array.init([document.getElementById("left-rollbacks"), document.getElementById("right-rollbacks")], Element), { revertOnSpill: true });
                },
                ConfigureExample5: function () {
                    dragula(System.Array.init([document.getElementById("left-copy"), document.getElementById("right-copy")], Element), { copy: true });
                },
                ConfigureExample6: function () {
                    dragula(System.Array.init([document.getElementById("left-copy-1tomany"), document.getElementById("right-copy-1tomany")], Element), { copy: function (el, source) {
                            return Bridge.referenceEquals(source.id, "left-copy-1tomany");
                        }, accepts: function (el, target, source, sibling) {
                            return !Bridge.referenceEquals(target.id, "left-copy-1tomany");
                        } });
                },
                ConfigureExample7: function () {
                    dragula(System.Array.init([document.getElementById("left-lovehandles"), document.getElementById("right-lovehandles")], Element), { moves: function (el, container, handle) {
                            return System.String.contains(handle.className,"handle");
                        } });
                },
                ConfigureExample8: function () {
                    var clickIndicator = " [click!]";
                    var sortable = document.getElementById("sortable");

                    dragula(System.Array.init([sortable], Element));

                    sortable.onclick = function (e) {
                        var target = Bridge.cast(e.target, Element);
                        if (Bridge.referenceEquals(target.id, sortable.id)) {
                            return null;
                        }

                        target.innerHTML = (target.innerHTML || "") + (clickIndicator || "");

                        setTimeout(function (timeoutEv) {
                            target.innerHTML = System.String.replaceAll(target.innerHTML, clickIndicator, "");
                        }, 500);

                        return null;
                    };
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJEcmFndWxhRGVtby5qcyIsCiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsiQXBwLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7O1lBWVlBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0FBOzs7OztvQkFLQUEsUUFBOEJBLG1CQUUxQkEsMENBQ0FBOzs7b0JBTUpBLFlBQVlBLFFBQThCQSxtQkFFdENBLHdDQUNBQTs7b0JBR0pBLGlCQUFpQkEsQUFBZ0NBO3dCQUU3Q0EsZUFBZUE7OztvQkFHbkJBLGlCQUFpQkEsQUFBZ0NBO3dCQUU3Q0E7OztvQkFHSkEsaUJBQWlCQSxBQUFxREEsVUFBQ0EsSUFBSUE7d0JBRXZFQTs7O29CQUdKQSxnQkFBZ0JBLEFBQXFEQSxVQUFDQSxJQUFJQTt3QkFFdEVBLHNCQUFzQkE7Ozs7b0JBTTFCQSxRQUE4QkEsbUJBRXRCQSwwQ0FDQUEsc0RBRUpBOzs7b0JBUUpBLFFBQThCQSxtQkFFdEJBLDJDQUNBQSx1REFFSkE7OztvQkFRSkEsUUFBOEJBLG1CQUV0QkEsc0NBQ0FBLGtEQUVKQTs7O29CQVFKQSxRQUE4QkEsbUJBRXRCQSw4Q0FDQUEsMERBRUpBLFFBRVdBLEFBQTBCQSxVQUFDQSxJQUFJQTttQ0FDbENBO29DQUVNQSxVQUFDQSxJQUFJQSxRQUFRQSxRQUFRQTttQ0FDM0JBOzs7O29CQU1aQSxRQUE4QkEsbUJBRXRCQSw2Q0FDQUEseURBRUpBLFNBRVlBLFVBQUNBLElBQUlBLFdBQVdBO21DQUFXQTs7OztvQkFNM0NBO29CQUNBQSxlQUFlQTs7b0JBRWZBLFFBQThCQSxtQkFFMUJBOztvQkFHSkEsbUJBQW1CQTt3QkFFZkEsYUFBYUEsWUFBcUJBO3dCQUNsQ0EsSUFBSUEsa0NBQWFBOzRCQUViQSxPQUFPQTs7O3dCQUdYQSwrQ0FBb0JBOzt3QkFFcEJBLFdBQXVCQSxBQUFtQ0E7NEJBRXREQSxtQkFBbUJBLDJDQUF5QkE7Ozt3QkFHaERBLE9BQU9BIiwKICAic291cmNlc0NvbnRlbnQiOiBbInVzaW5nIFN5c3RlbTtcclxudXNpbmcgRHJhZ3VsYU9wdGlvbnMgPSBSZXR5cGVkLmRyYWd1bGEuZHJhZ3VsYTIuRHJhZ3VsYU9wdGlvbnM7XHJcblxyXG5uYW1lc3BhY2UgRHJhZ3VsYURlbW9cclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFwcFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIERyYWd1bGEgbGlicmFyeSBpcyBhY2Nlc3NlZCB2aWEgR2xvYmFsIHZhcmlhYmxlcyxcclxuICAgICAgICAgICAgLy8gc2VlIFwibG9hZGVyXCIgc2V0dGluZyBpbiBicmlkZ2UuanNvbiBmaWxlLlxyXG5cclxuICAgICAgICAgICAgQ29uZmlndXJlRXhhbXBsZTEoKTtcclxuICAgICAgICAgICAgQ29uZmlndXJlRXhhbXBsZTIoKTtcclxuICAgICAgICAgICAgQ29uZmlndXJlRXhhbXBsZTMoKTtcclxuICAgICAgICAgICAgQ29uZmlndXJlRXhhbXBsZTQoKTtcclxuICAgICAgICAgICAgQ29uZmlndXJlRXhhbXBsZTUoKTtcclxuICAgICAgICAgICAgQ29uZmlndXJlRXhhbXBsZTYoKTtcclxuICAgICAgICAgICAgQ29uZmlndXJlRXhhbXBsZTcoKTtcclxuICAgICAgICAgICAgQ29uZmlndXJlRXhhbXBsZTgoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgQ29uZmlndXJlRXhhbXBsZTEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmV0eXBlZC5kcmFndWxhLmRyYWd1bGEzLlNlbGYobmV3IFJldHlwZWQuZG9tLkVsZW1lbnRbXVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtZGVmYXVsdHNcIiksXHJcbiAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWRlZmF1bHRzXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBDb25maWd1cmVFeGFtcGxlMigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZHJha2UgPSBSZXR5cGVkLmRyYWd1bGEuZHJhZ3VsYTMuU2VsZihuZXcgUmV0eXBlZC5kb20uRWxlbWVudFtdXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFJldHlwZWQuZG9tLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1ldmVudHNcIiksXHJcbiAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWV2ZW50c1wiKSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkcmFrZS5vbihcImRyYWdcIiwgbmV3IEFjdGlvbjxSZXR5cGVkLmRvbS5FbGVtZW50PihlbCA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUuUmVwbGFjZShcImV4LW1vdmVkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBkcmFrZS5vbihcImRyb3BcIiwgbmV3IEFjdGlvbjxSZXR5cGVkLmRvbS5FbGVtZW50PihlbCA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgZXgtbW92ZWRcIjtcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgZHJha2Uub24oXCJvdmVyXCIsIG5ldyBBY3Rpb248UmV0eXBlZC5kb20uRWxlbWVudCwgUmV0eXBlZC5kb20uRWxlbWVudD4oKGVsLCBjb250YWluZXIpID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgKz0gXCIgZXgtb3ZlclwiO1xyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBkcmFrZS5vbihcIm91dFwiLCBuZXcgQWN0aW9uPFJldHlwZWQuZG9tLkVsZW1lbnQsIFJldHlwZWQuZG9tLkVsZW1lbnQ+KChlbCwgY29udGFpbmVyKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZS5SZXBsYWNlKFwiZXgtb3ZlclwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBDb25maWd1cmVFeGFtcGxlMygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZXR5cGVkLmRyYWd1bGEuZHJhZ3VsYTMuU2VsZihuZXcgUmV0eXBlZC5kb20uRWxlbWVudFtdXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmV0eXBlZC5kb20uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LXJtLXNwaWxsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJldHlwZWQuZG9tLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmlnaHQtcm0tc3BpbGxcIiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IERyYWd1bGFPcHRpb25zXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlT25TcGlsbCA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBDb25maWd1cmVFeGFtcGxlNCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZXR5cGVkLmRyYWd1bGEuZHJhZ3VsYTMuU2VsZihuZXcgUmV0eXBlZC5kb20uRWxlbWVudFtdXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmV0eXBlZC5kb20uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LXJvbGxiYWNrc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LXJvbGxiYWNrc1wiKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgRHJhZ3VsYU9wdGlvbnNcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXZlcnRPblNwaWxsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIENvbmZpZ3VyZUV4YW1wbGU1KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJldHlwZWQuZHJhZ3VsYS5kcmFndWxhMy5TZWxmKG5ldyBSZXR5cGVkLmRvbS5FbGVtZW50W11cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnQtY29weVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWNvcHlcIiksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbmV3IERyYWd1bGFPcHRpb25zXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weSA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgdm9pZCBDb25maWd1cmVFeGFtcGxlNigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSZXR5cGVkLmRyYWd1bGEuZHJhZ3VsYTMuU2VsZihuZXcgUmV0eXBlZC5kb20uRWxlbWVudFtdXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmV0eXBlZC5kb20uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0LWNvcHktMXRvbWFueVwiKSxcclxuICAgICAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWNvcHktMXRvbWFueVwiKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBuZXcgRHJhZ3VsYU9wdGlvbnNcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3B5ID0gbmV3IERyYWd1bGFPcHRpb25zLmNvcHlGbigoZWwsIHNvdXJjZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLmlkID09IFwibGVmdC1jb3B5LTF0b21hbnlcIiksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdHMgPSAoZWwsIHRhcmdldCwgc291cmNlLCBzaWJsaW5nKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaWQgIT0gXCJsZWZ0LWNvcHktMXRvbWFueVwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgQ29uZmlndXJlRXhhbXBsZTcoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUmV0eXBlZC5kcmFndWxhLmRyYWd1bGEzLlNlbGYobmV3IFJldHlwZWQuZG9tLkVsZW1lbnRbXVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFJldHlwZWQuZG9tLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdC1sb3ZlaGFuZGxlc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBSZXR5cGVkLmRvbS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJpZ2h0LWxvdmVoYW5kbGVzXCIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5ldyBEcmFndWxhT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVzID0gKGVsLCBjb250YWluZXIsIGhhbmRsZSkgPT4gaGFuZGxlLmNsYXNzTmFtZS5Db250YWlucyhcImhhbmRsZVwiKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyB2b2lkIENvbmZpZ3VyZUV4YW1wbGU4KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyBjbGlja0luZGljYXRvciA9IFwiIFtjbGljayFdXCI7XHJcbiAgICAgICAgICAgIHZhciBzb3J0YWJsZSA9IFJldHlwZWQuZG9tLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydGFibGVcIik7XHJcblxyXG4gICAgICAgICAgICBSZXR5cGVkLmRyYWd1bGEuZHJhZ3VsYTMuU2VsZihuZXcgUmV0eXBlZC5kb20uRWxlbWVudFtdXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc29ydGFibGUub25jbGljayA9IGUgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChSZXR5cGVkLmRvbS5FbGVtZW50KWUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5pZCA9PSBzb3J0YWJsZS5pZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuaW5uZXJIVE1MICs9IGNsaWNrSW5kaWNhdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFJldHlwZWQuZG9tLnNldFRpbWVvdXQoKGdsb2JhbDo6UmV0eXBlZC5kb20uc2V0VGltZW91dEZuKSh0aW1lb3V0RXYgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gdGFyZ2V0LmlubmVySFRNTC5SZXBsYWNlKGNsaWNrSW5kaWNhdG9yLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH0pLCA1MDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdCn0K
