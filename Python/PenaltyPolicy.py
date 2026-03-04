from Agent import Agent

class PenaltyPolicy:
    def __init__(self, threshold: float = 60000, extra_rate: float = 0.01):
        self.threshold = threshold
        self.extra_rate = extra_rate

    def apply(self, agent: Agent) -> float:
        if agent.sales < self.threshold:
            return -agent.sales * self.extra_rate
        return 0