import { useEffect, useRef } from 'react';
import { animate, createTimeline } from 'animejs';
import { Mail, Cpu, MessageSquare } from 'lucide-react';

export function AnimatedFlow() {
  const triggerRef = useRef(null);
  const agentRef = useRef(null);
  const actionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    // Reset initial values using animate with 0 duration in Anime.js v4
    animate([triggerRef.current, agentRef.current, actionRef.current], {
      scale: 1,
      duration: 0
    });
    animate([line1Ref.current, line2Ref.current], {
      top: '-12px',
      opacity: 0,
      duration: 0
    });

    // Build timeline using createTimeline (Anime.js v4 timeline helper)
    const tl = createTimeline({
      loop: true,
      defaults: {
        easing: 'easeOutQuad'
      }
    });

    // In Anime.js v4, the signature is timeline.add(targets, parameters, position)
    tl
      // 1. Data pulse down the first path segment
      .add(line1Ref.current, {
        top: ['-12px', '28px'],
        opacity: [
          { to: 0, duration: 0 },
          { to: 1, duration: 80 },
          { to: 1, duration: 640 },
          { to: 0, duration: 80 }
        ],
        duration: 800,
      })
      // 2. Bounce the AI Agent card with spring easing
      .add(agentRef.current, {
        scale: [1, 1.12, 1],
        borderColor: ['rgba(255, 255, 255, 0.08)', 'rgba(0, 223, 137, 0.6)', 'rgba(255, 255, 255, 0.08)'],
        boxShadow: ['0 4px 12px rgba(0, 0, 0, 0.5)', '0 0 15px rgba(0, 223, 137, 0.25)', '0 4px 12px rgba(0, 0, 0, 0.5)'],
        duration: 650,
        ease: 'easeOutElastic(1, 0.6)'
      }, '-=120')
      // 3. Data pulse down the second path segment
      .add(line2Ref.current, {
        top: ['-12px', '28px'],
        opacity: [
          { to: 0, duration: 0 },
          { to: 1, duration: 80 },
          { to: 1, duration: 640 },
          { to: 0, duration: 80 }
        ],
        duration: 800,
      }, '+=150')
      // 4. Bounce the Action node card
      .add(actionRef.current, {
        scale: [1, 1.12, 1],
        borderColor: ['rgba(255, 255, 255, 0.08)', 'rgba(0, 223, 137, 0.6)', 'rgba(255, 255, 255, 0.08)'],
        boxShadow: ['0 4px 12px rgba(0, 0, 0, 0.5)', '0 0 15px rgba(0, 223, 137, 0.25)', '0 4px 12px rgba(0, 0, 0, 0.5)'],
        duration: 650,
        ease: 'easeOutElastic(1, 0.6)'
      }, '-=120')
      // 5. Rest state pause before looping
      .add({
        duration: 1500
      });

    // Cleanup resources
    return () => {
      tl.pause();
    };
  }, []);

  // Kinetic elastic spring hover effect using Anime.js v4 animate
  const handleMouseEnter = (ref) => {
    animate(ref.current, {
      scale: 1.14,
      rotate: '6deg',
      duration: 400,
      ease: 'easeOutElastic(1.2, 0.5)'
    });
  };

  const handleMouseLeave = (ref) => {
    animate(ref.current, {
      scale: 1,
      rotate: '0deg',
      duration: 350,
      ease: 'easeOutQuad'
    });
  };

  return (
    <div className="service-card__visual" aria-hidden="true" style={{ overflow: 'hidden' }}>
      {/* Node 1: Trigger */}
      <div
        ref={triggerRef}
        className="flow-node flow-node--trigger"
        onMouseEnter={() => handleMouseEnter(triggerRef)}
        onMouseLeave={() => handleMouseLeave(triggerRef)}
        style={{ cursor: 'pointer', zIndex: 2 }}
      >
        <Mail size={16} className="flow-node__icon" />
        <span className="flow-node__label">Trigger</span>
        <span className="flow-node__desc">Customer Email</span>
      </div>

      {/* Path 1 */}
      <div className="flow-line" style={{ zIndex: 1 }}>
        <div ref={line1Ref} className="flow-line__pulse" style={{ animation: 'none' }} />
      </div>

      {/* Node 2: AI Agent */}
      <div
        ref={agentRef}
        className="flow-node flow-node--agent"
        onMouseEnter={() => handleMouseEnter(agentRef)}
        onMouseLeave={() => handleMouseLeave(agentRef)}
        style={{ cursor: 'pointer', zIndex: 2 }}
      >
        <Cpu size={16} className="flow-node__icon" />
        <span className="flow-node__label">AI Agent</span>
        <span className="flow-node__desc">Reasoning & Tool Call</span>
      </div>

      {/* Path 2 */}
      <div className="flow-line" style={{ zIndex: 1 }}>
        <div ref={line2Ref} className="flow-line__pulse" style={{ animation: 'none' }} />
      </div>

      {/* Node 3: Action */}
      <div
        ref={actionRef}
        className="flow-node flow-node--action"
        onMouseEnter={() => handleMouseEnter(actionRef)}
        onMouseLeave={() => handleMouseLeave(actionRef)}
        style={{ cursor: 'pointer', zIndex: 2 }}
      >
        <MessageSquare size={16} className="flow-node__icon" />
        <span className="flow-node__label">Action</span>
        <span className="flow-node__desc">Slack Notification</span>
      </div>
    </div>
  );
}

export default AnimatedFlow;
