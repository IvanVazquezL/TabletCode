from Agent import Agent

class RegionalPolicy:
    def __init__(self, region: str = "Norte", extra_rate: float = 0.01):
        self.region = region
        self.extra_rate = extra_rate

    def apply(self, agent: Agent) -> float:
        if agent.region == self.region:
            return agent.sales * self.extra_rate
        return 0